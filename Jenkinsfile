pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        GIT_CREDENTIALS_ID = 'github-credentials'
    }
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: "${env.GIT_CREDENTIALS_ID}", url: 'https://github.com/candrepa1/ci-poli.git'
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    dir('back') {
                        sh 'docker build -t my-backend .'
                    }
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    dir('front') {
                        sh 'docker build -t my-frontend .'
                    }
                }
            }
        }
        stage('Run Containers') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }
    post {
        always {
            sh 'docker-compose down'
        }
    }
}
