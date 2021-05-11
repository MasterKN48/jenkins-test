def skipRemainingStages = false

pipeline {
    agent any
    
    stages {
        stage('build'){
            steps{
                echo "Starting build"
                sh 'node -v'
                sh "npm install"
            }
        }
        stage("test") {
             environment {
                NODE_ENV = "test"
                PORT = "8001"
            }
            steps {
                echo "#### BUILD STARTED TEST ####"
                echo "NODE_ENV = ${env.NODE_ENV}"
                echo "PORT = ${env.PORT}"
                sh "npm run test"
                // script {
                //     error "This pipeline stops here!"
                // }
            }
        }
        stage("development") {
            environment {
                NODE_ENV = "development"
                PORT = "8000" 
            }
            steps {
                echo "#### BUILD STARTED DEVELOPMENT ####"
                echo "NODE_ENV = ${env.NODE_ENV}"
                echo "PORT = ${env.PORT}"
                sh "npm start & sleep 1"
                script{
                    sh 'exit 0'
                }
            }
        }
    }
}