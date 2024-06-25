pipeline {
    agent any
    stages {
        stage('Pull') {
            steps {
                git branch: 'main', url: 'https://github.com/candrepa1/ci-poli'

                sh 'echo "Code pulled successfully"'
            }
        }
        stage('Build frontend docker image') {
            steps {
                dir('front') {
                    dockerfile {
                        filename 'Dockerfile'
                        dir 'docker'
                    }
                }
            }
        }
    }
    post {
        always {
            sh 'docker-compose down --remove-orphans'
        }
    }
}
