const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
	e.preventDefault();

// Escribir Filas
	try {
		const respuesta = await fetch('https://sheet.best/api/sheets/66da6ad5-abb6-4bb7-9cb3-9e1cb417a277', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"Nombre": formulario.nombre.value,
				"Correo": formulario.correo.value,
				"Telefono": formulario.telefono.value,
                "Provincia": formulario.Provincia.value,
                "Ciudad": formulario.Ciudad.value,
                "Codigo Postal":formulario.CodigoPostal.value,
                "Situacion socioeconomica":formulario.SiutacionSocioeconomica.value,
                "Edad":formulario.Edad.value,
                "Necesito...": formulario.Necesito.value
			})
		});

		const contenido = await respuesta.json();
		console.log(contenido);
	} catch(error){
		console.log(error);
	}

// Leer Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/66da6ad5-abb6-4bb7-9cb3-9e1cb417a277');

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Eliminar Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/66da6ad5-abb6-4bb7-9cb3-9e1cb417a277
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Actualizar Filas
	//try {
	//	const respuesta = await fetch('https://sheet.best/api/sheets/66da6ad5-abb6-4bb7-9cb3-9e1cb417a277', {
	//		method: 'PATCH',
	//		mode: 'cors',
	//		headers: {
	//			'Content-Type': 'application/json'
	//		},
	//		body: JSON.stringify({
	//			"Telefono": "000 000 000"
	//		})
	//	});

	//	const contenido = await respuesta.json();
	//	console.log(contenido);
	//} catch(error){
	//	console.log(error);
	//}


	registro.classList.remove('activo');
	exito.classList.add('activo');
});