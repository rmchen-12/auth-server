pipeline {
    agent {
        docker {
            image 'node:10-slim' 
            args '-p 7001:7001' 
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
            }
        }
        stage('Deliver') { 
            steps {
                sh 'npm start' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh 'echo asdf'
            }
        }
    }
}
