pipeline {
    agent {
        docker {
            image 'node:10-slim' 
            args '-p 7001:7001 -v /root/npm/config:/npm/config -v /root/npm/storage:/npm/storage -v /var/run/docker.sock:/var/run/docker.sock -v /bin/docker:/bin/docker' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                   npm config set registry http://10.1.10.34:4873 
                   npm install -g cnpm 
                   cnpm set registry http://10.1.10.34:4873  
                   cnpm i
                '''
            }
        }
        stage('Deliver') { 
            steps {
                sh 'npm start'
                input message: 'Finished using the server? (Click "Proceed" to continue)'
                sh 'exit server'
            }
        }
    }
}
