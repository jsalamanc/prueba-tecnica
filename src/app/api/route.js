export async function GET() {
    try {
        let res = await fetch(process.env.URL_CONTENT, {
            method: 'GET'
        })
        res = await res.json();

        const comments = [
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/1.jpg',
                nombre: "José López",
                descripcion: "¿Realmente funciona? He oído algo parecido, pero nunca he visto ninguna reseña.",
                hora: "12 h",
                likes: 10
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/2.jpg',
                nombre: "Luis Martínez",
                descripcion: "Natalia Díaz Quintana definitivamente sabe como hacer dinero. Saludos 👏🔥",
                hora: "16 m",
                likes: 23
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/3.jpg',
                nombre: "Carlos Rodríguez",
                descripcion: "Acabo de retirar mis ganancias ... Activa tu cerebro y apúntate. Estás perdiendo una oportunidad de la que te arrepentirás el resto de tu vida.",
                hora: "1 h",
                likes: 24
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/4.jpg',
                nombre: "Juan García",
                descripcion: "Hace tiempo escuche hablar de esta plataforma pero cada vez olvidaba averiguar sobre ella 🙏 gracias Natalia Díaz Quintana por esta información :)",
                hora: "12 m",
                likes: 23
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/5.jpg',
                nombre: "David Mejía",
                descripcion: "Finalmente pude comprar un auto nuevo. No es vida, sino un sueño... Los sueños se hacen realidad)))",
                hora: "12 m",
                likes: 5
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/6.jpg',
                nombre: "María Paz",
                descripcion: "Ahora tengo la oportunidad de ir de vacaciones este año :) Y lo mejor es que mientras este de vacaciones, el sistema ganará dinero día y noche. Es un sueño hecho realidad.",
                hora: "14 m",
                likes: 22
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/7.jpg',
                nombre: "Daniel Cruz",
                descripcion: "Me registré la semana pasada y ya he ganado ₡1 421 053 Lo recomiendo a todo el mundo 😊",
                hora: "3 h",
                likes: 22
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/8.jpg',
                nombre: "Mario Flores",
                descripcion: "Gracias por la info Trece Noticias",
                hora: "3 h",
                likes: 1
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/9.jpg',
                nombre: "Francisco Rivera",
                descripcion: "Acabo de inscribirme, amigos, ¡deseenme suerte!",
                hora: "3 h",
                likes: 5
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/10.jpg',
                nombre: "Jorge Reyes",
                descripcion: "Natalia Díaz Quintana causa polémica pero es inteligente ¡he visto muchas de sus entrevistas! Creo que la plataforma realmente vale la pena.",
                hora: "3 h",
                likes: 11
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/11.jpg',
                nombre: "Manuel Pineda",
                descripcion: "Me registré hace dos días, mi saldo ya es de ₡738 947, estoy pensando en solicitar un retiro o es demasiado pronto? De hecho, no hice nada, de alguna manera me lo gané automáticamente. 🥰🥰🥰",
                hora: "5 h",
                likes: 21
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/12.jpg',
                nombre: "Josefa Zelaya",
                descripcion: "Estoy sorprendida y mis amigos también... Al principio pensé que era algún tipo de estafa, no estaba claro como funciona. Pero entonces el gerente se puso en contacto conmigo y me explicó todo con detalle, ¡resultó ser muy sencillo! Siempre he trabajado mucho y no creía que fuera posible ganar dinero de esa manera. Para abreviar la historia, compré un auto. Suerte a todos, recomiendo mucho esta plataforma 👍",
                hora: "5 h",
                likes: 13
            },
            {
                image: 'https://alphatrader.best/landers/natdiaz_1718885579/img/13.jpg',
                nombre: "Miguel Ramos",
                descripcion: "Gracias por la información, empecé con esto hace 4 semanas en un programa piloto como Natalia Díaz Quintana. Recibí 12 cheques por un total de ₡9 236 842 es muy bueno.",
                hora: "5 h",
                likes: 16
            }
        ];

        return Response.json({ ...res.object, comments });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        return Response.json(error);
    }
}