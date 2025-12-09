pipeline {
    agent any  // Esto indica que puede ejecutarse en cualquier agente disponible.

    environment {
        DOCKER_IMAGE = 'jenkins/jenkins:latest'
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
                    // Construir la imagen Docker con el Dockerfile presente en el repositorio
                    sh 'docker build -t ${DOCKER_IMAGE} .'
                }
            }
        }

        stage('Ejecutar contenedor Docker') {
            steps {
                script {
                    // Ejecutar la imagen Docker construida en un contenedor
                    sh 'docker run -d -p 8087:8087 ${DOCKER_IMAGE}'
                }
            }
        }
    }
}
