# Event

<br>

## animation


```
<script>
  $(function () {
    $(".btn1").on("click", function () {
      $(".txt1").animate({
        marginLeft: "500px",
        fontSize:"50px"
      },
      2000, "linear", function() { 
        alert("모션 완료!");
      });
      });

      $(".btn2").on("click", function () {
        $(".txt2").animate({
          marginLeft: "+=50px",  // 대입연산자
        }, 1000);  // 1000 = 1초
      })
    });
</script>
```
```
<style>
  .txt1 {
    background-color: lemonchiffon;
  }
  .txt2 {
    background-color: skyblue;
  }
</style>
```
```
<body>
  <p><button class = "btn1">버튼 1</button></p>
  <span class = "txt1">"500px 이동"</span>
  <p><button class = "btn2">버튼 2</button></p>
  <span class = "txt2">"50px"씩 이동</span>
</body>
```

<br>

* <b>animate</b> : 요소 선택, 메소드, 스타일, 소요시간, 투명도, 콜백함수(생략 가능)

* linear = 일정한 속도로 애니메이션 진행

* animation 지정 시, 소요시간 1000은 1초를 의미함

<br><br><br>

## queue

<br>

<예제 1>

```
<script>
  $(function () {
    $(".txt1")
    .animate({marginLeft:"200px"},1000)
    .animate({marginTop:"200px"},1000)
    .queue(function () {
      $(this).css({"background":"lemonchiffon"});
      $(this).dequeue();
    })
    .animate({marginLeft:0}, 1000)
    .animate({marginTop:0}, 1000)
  })
</script>
```
```
<style>
  * {
    margin: 0;
  }

  .txt1 {
    width: 50px;
    text-align: center;
    background-color: skyblue;
  }
</style>
```
```
<body>
  <p class = "txt1">내용</p>
</body>
```

<br>

queue를 작성하면 일종의 브레이크가 걸리게 됨
=> $(this).dequeue();를 주석 처리하면 그 뒤의 애니메이션은 진행이 안됨 => 뒤의 애니메이션을 진행시켜주기 위해 dequeue를 사용

<br><br><br>

<예제 2>
```
<script>
  $(function () {
    $(".txt1")  
    .animate({marginLeft:"100px"},1000)
    .animate({marginLeft:"400px"},1000)
    .animate({marginLeft:"700px"},1000)

    $(".txt2") 
    .animate({marginLeft:"100px"},1000)
    .animate({marginLeft:"400px"},1000)
    .animate({marginLeft:"700px"},1000)
    $(".txt2").clearQueue();
    })
</script>
```
```
<style>
  * {
    margin: 0;
  }

  .txt1 {
    width: 50px;
    text-align: center;
    background-color: skyblue;
  }

  .txt2 {
    width: 50px;
    text-align: center;
    background-color: lemonchiffon;;
  }
</style>
```
```
<body>
  <p class = "txt1">내용1</p>
  <p class = "txt2">내용2</p>
</body>
```

<br>

* clearQueue 

".txt2"에 대해 대기 중인 애니메이션은 총 3개

.animate({marginLeft:"100px"},1000)
.animate({marginLeft:"400px"},1000)
.animate({marginLeft:"700px"},1000)

=> 애니메이션 리스트 아래에 clearQueue를 붙여주면 첫번째 애니메이션(100px 이동)을 제외한 대기 애니메이션은 제거

<br><br><br><br><br>

# Ajax (Asynchronous JavaScript and XML)

<br>

## 외부 컨텐츠 요청 메소드

* Load() 메소드
* ajax() 메소드

