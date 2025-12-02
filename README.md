# 🚀 Aws-Project-Test

Proyecto web minimalista desplegado en AWS, desarrollado como parte del Bootcamp 2025. Aplicación web interactiva con integración de S3 para almacenamiento de imágenes.

## 📋 Descripción

Aplicación web simple que demuestra la integración entre servicios de AWS (EC2 y S3) con una interfaz moderna y responsiva. Incluye funcionalidades interactivas con JavaScript y diseño atractivo con gradientes y animaciones.

## 🛠️ Tecnologías

- **HTML5** - Estructura de la página
- **CSS3** - Estilos y animaciones
- **JavaScript (Vanilla)** - Interactividad
- **AWS S3** - Almacenamiento de imágenes
- **AWS EC2** - Hosting (pendiente de configuración)

## 📁 Estructura del Proyecto

```
Aws-Project-Test/
├── index.html          # Página principal
├── CSS/
│   └── style.css      # Estilos de la aplicación
├── JS/
│   ├── script.js      # Funcionalidades principales
│   └── scripts.js     # Scripts adicionales
├── img/
│   ├── classroom_co2_simulation.txt
│   └── furina.png
├── EC2-S3.sh          # Script de deployment AWS
├── .gitignore         # Archivos ignorados por Git
└── README.md          # Este archivo
```

## 🚀 Características

- ✨ Diseño moderno con gradientes y animaciones CSS
- 🎲 Mensajes aleatorios interactivos
- 🖼️ Integración con AWS S3 para imágenes
- 📱 Diseño responsivo
- 🎨 Interfaz de usuario limpia y minimalista

## 💻 Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/BrianMatheo/Aws-Project-Test.git
cd Aws-Project-Test
```

2. Abre `index.html` en tu navegador:
```bash
# Windows
start index.html

# O simplemente abre el archivo con tu navegador favorito
```

No se requiere instalación de dependencias adicionales.

## ☁️ Deployment en AWS

### Prerrequisitos

- Cuenta de AWS activa
- AWS CLI configurado
- Permisos para EC2 y S3

### Pasos para el Deployment

1. **Configurar S3 Bucket** (ya configurado):
   - Bucket: `brian-matheo`
   - Región: `us-east-1`

2. **Configurar EC2** (pendiente):
   - Ejecutar el script `EC2-S3.sh` para automatizar el deployment

```bash
# Hacer el script ejecutable
chmod +x EC2-S3.sh

# Ejecutar deployment
./EC2-S3.sh
```

## 🎯 Uso

1. Abre la aplicación en tu navegador
2. Haz clic en el botón "¡Click para mensaje!"
3. Disfruta de los mensajes aleatorios y las animaciones

## 👨‍💻 Autor

**Brian Matheo**
- GitHub: [@BrianMatheo](https://github.com/BrianMatheo)

## 📝 Licencia

Este proyecto es parte del Bootcamp 2025 y está disponible para fines educativos.

## 🔄 Estado del Proyecto

🚧 En desarrollo - Deployment en EC2 pendiente

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
