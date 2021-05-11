def skipRemainingStages = false

pipeline {
    agent any
    
    stages {
        stage("test") {
             environment {
                NODE_ENV = "test"
                PORT = "8001"
            }
            steps {
                echo "#### BUILD STARTED TEST ####"
                echo "NODE_ENV = ${env.NODE_ENV}"
                echo "PORT = ${env.PORT}"

                sh 'node -v'
                sh "npm install"
                sh "npm run test"

                // script {
                //     error "This pipeline stops here!"
                // }
            }
        }

        stage("development") {
            // based on stage=development
            environment {
                NODE_ENV = "development"
                PORT = "8000" 
            }

            steps {
                echo "#### BUILD STARTED DEVELOPMENT ####"
                echo "NODE_ENV = ${env.NODE_ENV}"
                echo "PORT = ${env.PORT}"
        
                sh 'node -v'
                sh "npm install"
                sh "npm run start"
                sh "killall node"
                script{
                    sh 'exit 1'
                }
            }
        }


    }
}