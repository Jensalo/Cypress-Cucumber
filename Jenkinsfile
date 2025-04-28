pipeline {
    agent any

    tools {
        nodejs "NodeJS 18" // Debes configurarlo en Jenkins > Global Tool Configuration
    }

    environment {
        CI = 'true' // Importante para que Cypress no use GUI
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar pruebas Cypress') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Publicar reporte HTML') {
            steps {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Reporte Cypress'
                ])
            }
        }
    }

    post {
        always {
            echo 'Pipeline finalizado.'
        }
    }
}
