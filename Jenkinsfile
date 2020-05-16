pipeline {
    agent {
        docker {
            image 'node:10.0-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm config set registry http://10.1.10.34:4873'
                sh 'npm install -g cnpm'
                sh 'cnpm i' 
                sh 'npm start'
            }
        }
    }
}
