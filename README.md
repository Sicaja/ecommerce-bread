# Pan

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.12.

## Instalación de Node.js

Asegúrate de tener instalada la versión 20 de Node.js. Puedes descargarla desde [nodejs.org](https://nodejs.org/).

## Instalación de dependencias

Ejecuta `npm install` para instalar todas las dependencias necesarias para el proyecto.

## Servidor de desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Arquitectura Modular

Este proyecto utiliza una arquitectura modular, lo que significa que el código está organizado en módulos independientes y reutilizables. Cada módulo encapsula una funcionalidad específica, lo que facilita el mantenimiento y la escalabilidad del proyecto. Esta arquitectura permite que diferentes equipos trabajen en paralelo en distintos módulos sin interferir entre sí.

## Enfoque de Arquitectura Atómica

Además de la arquitectura modular, este proyecto sigue un enfoque de arquitectura atómica para la construcción de componentes de la interfaz de usuario. La arquitectura atómica se basa en la idea de descomponer la interfaz en sus elementos más básicos, llamados átomos, que luego se combinan para formar componentes más complejos, como moléculas y organismos. Este enfoque facilita la reutilización y el mantenimiento de los componentes, asegurando una mayor consistencia en el diseño de la interfaz de usuario.

## Librerías de Componentes

Para la construcción de la interfaz de usuario, se utilizan las siguientes librerías de componentes:

- **PrimeNG**: Una colección rica de componentes de interfaz de usuario para Angular, que incluye tablas, formularios, menús, gráficos y más. Puedes obtener más información en [PrimeNG](https://www.primefaces.org/primeng/).
- **Tailwind CSS**: Un framework de CSS utilitario que permite crear diseños personalizados de manera rápida y eficiente. Más detalles en [Tailwind CSS](https://tailwindcss.com/).

## Integración y Despliegue Continuo (CI/CD) con GitHub Pages

Se ha implementado un workflow para la integración y despliegue continuo (CI/CD) utilizando GitHub Pages. Este workflow permite que cada vez que se realicen cambios en el repositorio, se ejecuten automáticamente pruebas y se despliegue la última versión de la aplicación en GitHub Pages.

### Configuración del Workflow

El workflow está definido en un archivo YAML ubicado en `.github/workflows/workflow-deploy.yml`. Este archivo contiene los pasos necesarios para instalar las dependencias, ejecutar las pruebas y desplegar la aplicación.

### Pasos del Workflow

1. **Instalación de Dependencias**: Se instala Node.js y las dependencias del proyecto utilizando `npm install`.
2. **Ejecución de Pruebas**: Se ejecutan las pruebas definidas en el proyecto para asegurar que los cambios no introduzcan errores.
3. **Construcción del Proyecto**: Se construye el proyecto utilizando `ng build --prod` para generar los archivos estáticos necesarios para el despliegue.
4. **Despliegue en GitHub Pages**: Se despliegan los archivos generados en la rama `gh-pages` del repositorio, lo que actualiza automáticamente la versión publicada de la aplicación.

### Beneficios del CI/CD

- **Automatización**: Reduce la necesidad de intervención manual en el proceso de despliegue.
- **Consistencia**: Asegura que cada versión desplegada ha pasado por un proceso de pruebas.
- **Rapidez**: Permite que los cambios lleguen a producción más rápidamente.

Para más detalles sobre cómo configurar GitHub Pages y workflows de GitHub Actions, puedes consultar la [documentación oficial de GitHub](https://docs.github.com/en/actions).

## Más ayuda

Para obtener más ayuda sobre Angular CLI, usa `ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
