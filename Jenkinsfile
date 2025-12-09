pipeline {
    agent any  // Esto indica que puede ejecutarse en cualquier agente disponible.

    environment {
        DOCKER_IMAGE = 'jenkins/jenkins:lts'
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/JoseGamer480/devops-finak'  // Clona el repositorio de GitHub
            }
        }

         stage('Construir Imagen Docker') {
            steps {
                script {
                    // Usar un agente Docker para la construcción de la imagen
                    docker.build("my-docker-image", ".") // Construir la imagen Docker con el Dockerfile presente en el repositorio
                }
            }
        }

        stage('Ejecutar Contenedor Docker') {
            steps {
                script {
                    // Usar un contenedor para ejecutar la imagen
                    docker.image("my-docker-image").run("-d -p 8087:8080")
                }
            }
        }
    }
}
