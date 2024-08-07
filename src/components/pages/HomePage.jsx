'use client';

import React from 'react';
import useSWR from 'swr';
import DOMPurify from 'dompurify';
import { DataTable } from '../ui/DataTable';
import { Form } from '../ui/Form/Form';
import { CardComments } from '../ui/comments/CardComments';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const HomePage = () => {
    const { data, error, isLoading } = useSWR('/api', fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    /**
     * DOMPurify is a library for sanitizing HTML and preventing cross-site scripting (XSS) attacks.
     * It’s easy to use and highly effective.
     */
    const cleanData = (content) => DOMPurify.sanitize(content);

    /**
     * render HTML
     */
    return (
        <div className="container pt-[10rem] md:pt-[15rem]">
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: cleanData(data?.metadata?.content) }}
            />
            <div
                className="content"
                dangerouslySetInnerHTML={{
                    __html: cleanData(data?.metadata?.earnings?.content)
                }}
            />
            <DataTable data={data?.metadata?.earnings?.users} />
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: cleanData(data?.metadata?.update) }}
            />
            <Form />
            <section>
                <div className="border-b-2 border-gray-800">
                    <h2 className="font-bold text-lg">Comentarios</h2>
                </div>
                <div className="flex flex-col gap-2">
                    {data?.comments?.map((comment, index) => (
                        <CardComments
                            key={index}
                            image={comment.image}
                            name={comment.nombre}
                            description={comment.descripcion}
                            hour={comment.hora}
                            likes={comment.likes}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
