
//파이프라인 시작
pipeline {
//필요한 사전 선언
    environment {
//  공통변수 시작
        GITURL = "git@github.com:InfraBlockchain/pbc-console-web-demo.git"
        BRANCH = "main"
        SLACKCHANNEL = "#proj-bc-labs-cicd-alarm"
        S3 = "demo.pbc.bc-labs.net"
        CFID = "E8EOQ5QM1JPW8"
        AWSPROFILE = "bc-labs"
 //추가변수 설정
        }
    tools {
        nodejs "nodejs"
}

  agent any
  stages {
    stage('Cloning Git') {
      steps {
        slackSend (channel: SLACKCHANNEL, color: '#00FF00', message: "${env.JOB_NAME}앱의 CI 과정이 시작되었습니다 \n Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        git([url: GITURL, branch: BRANCH, credentialsId: 'sshkey'])
          }
            } 
    
    stage('Yarn Build') {
      steps{
            sh '''
            yarn install
            yarn build
            '''
    }
        }

    stage('S3 Deploy') {
    steps{
                sh 'aws s3 sync ./out s3://$S3 --delete --exclude "documents/*" --profile $AWSPROFILE'
                sh '''
                INVALIDATION_ID=$(aws cloudfront create-invalidation --profile $AWSPROFILE --distribution-id $CFID --paths "/*" | jq -r '.Invalidation.Id')
                aws cloudfront wait invalidation-completed --profile $AWSPROFILE --distribution-id $CFID --id $INVALIDATION_ID
                '''
                }
            }
        }
             
            
    post {
        always {
            echo 'One way or another, I have finished'
        }
        success {
            slackSend (channel: SLACKCHANNEL, color: '#00FF00', message: "빌드 완료 \n ${env.JOB_NAME}앱의 CI 과정과 무효화가 성공적으로 끝났습니다 \n 변경된 사항은 바로 적용 됩니다 <@U0367BS4X0W>\n Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        unstable {
            echo 'I am unstable :/!'
        }
        failure {
            slackSend (channel: SLACKCHANNEL, color: '#00FF00', message: "빌드가 실패하였습니다 \n ${env.JOB_NAME}앱의 젠킨스 콘솔을 확인해주세요 <@U0367BS4X0W> \n Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            slackSend (channel: '#devops-alarm', color: '#00FF00', message: "빌드가 실패하였습니다 \n ${env.JOB_NAME}앱의 젠킨스 콘솔을 확인해주세요 \n Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
        }
        changed {
            echo 'Things were different before..........'
        }
    }
}




