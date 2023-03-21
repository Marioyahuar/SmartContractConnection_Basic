# Smart Contract Basic Connection

## Descripción
El repositorio contiene una aplicación web básica que se conecta con un contrato inteligente simple para simular un cambio de dólares a BNB en la Binance Smart Chain.
El presente repositorio debería servir como plantilla para conectar cualquier tipo de smart contract de manera rápida con una aplicación web simple.

# Requisitos previos

Antes de usar la aplicación web, es necesario tener instalado lo siguiente:
- Una wallet Metamask
- Una conexión a la red de Binance Smart Chain (BSC)

## Uso

Para utilizar la aplicación, sigue los siguientes pasos:
- Clona el repositorio y abre el archivo index.html en tu navegador web.
- Conecta tu wallet de MetaMask a la red de BSC.
- Conéctate a la aplicación haciendo clic en el botón "Connect".
- Ingresa la cantidad de dólares que deseas cambiar a BNB.
- Haz clic en el botón de "Convert".
- La aplicación interactuará con el contrato inteligente y mostrará la cantidad de BNB correspondiente.

## Configuración del contrato inteligente

En el archivo contract.js encontrarás los siguientes parámetros que debes configurar con la información de tu contrato inteligente:
- ABI: Aquí debes colocar el ABI del contrato inteligente.
- address: Aquí debes colocar la dirección del contrato inteligente.

## Desarrollo
La aplicación utiliza la librería web3.js para conectarse con el contrato inteligente. El archivo index.js contiene el código JavaScript que permite la conexión con la red de BSC y la interacción con el contrato inteligente.

## Contribución

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:
- Haz un fork del repositorio.
- Crea una rama con tu nueva funcionalidad o corrección de errores (git checkout -b nombre-de-la-rama).
- Haz tus cambios y confirma los mismos (git commit -am 'Agrega una nueva funcionalidad').
- Envía tus cambios a tu fork (git push origin nombre-de-la-rama).
- Crea un pull request desde tu rama hacia la rama principal del repositorio original.

¡Muchas gracias por leer!
