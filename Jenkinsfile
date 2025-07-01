pipeline {
    agent any
    
    environment {
        REMOTE_USER = credentials('VPS-Username')
        REMOTE_HOST = credentials('VPS-IP')
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

        stage("Set Permissions") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: env.SSH_CRED_ID, keyFileVariable: 'SSH_KEY')]) {
                    bat """
                    ssh -i %SSH_KEY% %REMOTE_USER%@%REMOTE_HOST% "sudo chmod 755 %REMOTE_PATH%/images"
                    """
                }
            }
        }
    }
}