/*
    객체를 생성하는 방법
    -객체리터럴을 통한생성
    -생성자 함수를 통한 생성 (new키워드를 이용해서 동일한구조의 객체를 복사할떄주로 사용)
    -생성자함수를 통해서생성된객체 : 인스턴스
*/

// 우리나라는 전세계 표준시간대에서 9시간이 더해진 시간 (그리니치 표쥰시간대적용

const now = new Date()
console.dir(now)

const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'Nomember', 
    'December']
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

let hr = 0;

if(hours<=12){
    hr = hours
    if(hr<10){
        hr = '0'+hr+' AM'
    }
}else{
    hr = hours-12
    if(hr<10){
        hr = '0'+hr+' PM'
    }
}
console.log(hr)