import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
    isValidPhoneNumber,
    parsePhoneNumberFromString
} from 'libphonenumber-js';
import { validator } from './validation';

export const Form = () => {
    const [phone, setPhone] = useState(null);
    const [isValid, setIsValid] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const handlePhoneChange = (value, country) => {
        /**
         * update value of phone
         */
        setPhone(value);
        console.log(value, country.format);
        // Add the "+" symbol to the number if it is not present.
        const formattedValue = value.startsWith('+') ? value : `+${value}`;
        /**
         * validate phone number
         */
        const phoneNumber = parsePhoneNumberFromString(formattedValue, country.countryCode);
        /**
         * update state isValid
         */
        setIsValid(phoneNumber ? phoneNumber.isValid() : false);
        console.log('first', phoneNumber ? phoneNumber.isValid() : false)
    };
    const onSubmit = (data) => {
        if (!phone || !isValid) {
            setIsValid(false);
            alert('número invalido');
            return;
        }
        alert('Enviado exitosamente!')
        console.log(data);
    };

    /**
     * return HTML
     */
    return (
        <section className="mt-10">
            <div className="bg-[red] p-4 rounded-tl-lg rounded-tr-lg">
                <h1 className="text-white font-medium text-center text-2xl">
                    Inscripción gratuita
                </h1>
            </div>
            <div className="bg-white p-4">
                <form
                    className="flex flex-col gap-5 pt-5"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="border border-gray-300 p-3 rounded-lg"
                        {...register('firstName', validator.firstName)}
                        placeholder="Nombre"
                    />
                    {errors.firstName && <p className="text-[red]">Nombre inválido</p>}
                    <input
                        className="border border-gray-300 p-3 rounded-lg"
                        {...register('lastName', validator.lastName)}
                        placeholder="Apellido"
                    />
                    {errors.lastName && <p className="text-[red]">Apellido inválido</p>}
                    <input
                        className="border border-gray-300 p-3 rounded-lg"
                        {...register('email', validator.email)}
                        placeholder="Correo Electrónico"
                    />
                    {/* errors will return when field validation fails  */}
                    {errors.email && <p className="text-[red]">Correo inválido</p>}
                    <PhoneInput
                        className="w-full"
                        country={'us'}
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                    {!isValid && (
                        <p className="text-[red]">Número de teléfono inválido</p>
                    )}
                    <div className="flex justify-center">
                        <button id='registro' className="bg-red-500 rounded-lg py-5 px-10 uppercase text-white pulse-button">
                            registrese ahora
                        </button>
                    </div>
                    <div>
                        <p className="font-medium text-center text-sm">
                            * Monto mínimo de inversión ₡135 000
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};
