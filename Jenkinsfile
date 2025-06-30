pipeline {
    agent any
    
    environment {
        REMOTE_USER = "moglico"
        REMOTE_HOST = "159.223.235.105"
        REMOTE_PATH = "/var/www/html/hedegare"
        SSH_CRED_ID = "VPS-Key"
    }
    
    stages {        
        stage("Deploy") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CRED_ID, keyFileVariable: 'SSH_KEY')]) {
                    bat '''
                    scp -i %SSH_KEY% -r .\\* %REMOTE_USER%@%REMOTE_HOST%:%REMOTE_PATH%
                    '''
                }
            }
        }
    }
}