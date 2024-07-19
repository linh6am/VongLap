//Bài 1: In ra 100 chữ Hello:
// for (let i = 0; i < 100; i++) {
//     if (i < 100) 
//     console.log('hello');
// }

//Bài 2:Nhập vào N từ prompt. In ra N lần chữ 'Hello':
// let N = +prompt('Nhập giá trị số:');
// for (let i = 0; i < N; i++) {
//     console.log('Hello')
// }

//Bài 3: In ra các số từ 1 đến 1000:
// for (i = 1; i <= 1000; i++) {
//     console.log(i)
// }

//Bài 4: In ra các số từ a đến b:
// let a = 5;
// let b = 10;
// for (i = a; i <= b; i++) {
//     console.log(i)
// }

//Bài 5: In ra các số từ a đến b, mỗi số trong 1 thẻ <h1>
// let a = 2;
// let b = 10;
// for (i = a; i <= b; i++) {
//     document.write(`<h1>${i}</h1>`)
// }

//Bài 6: In ra các số chẵn từ a đến b:
// let a = 1;
// let b = 20;
// for (i = a; i <= b; i++) {
//     if (i % 2 == 1) {
//         continue
//     }
//     console.log(i)
// }

//Bài 7: In ra các số từ a đến b số chẵn trong h2, số lẻ trong h1:
// let a = 1;
// let b = 10;
// for (i = a; i <= b; i++) {
//     if (i % 2 == 1) {
//        document.write(`<h1>${i}</h1>`) 
//     } else {
//         document.write(`<h2>${i}</h2>`) 
//     }
// }

//Bài 8: Tính tích các số từ a - b:
// let a = 5;
// let b = 10;
// let tich = 1;
// for (i = a; i <= b; i++) 
//     if (a <= b) {
//         tich *= i
//     }
//     {console.log(`${tich}`)
// }

//Bài 9: Tính Tổng các số chia 5 dư 2 từ a đến b:
// let a = 1;
// let b = 100;
// let tong = 0;
// for (i = a; i <= b; i++) {
//     if (i % 5 == 2) { 
//     (`${tong += i}`)
//     }
// }
// console.log(tong)

//Bài 10: Đếm các số chia 5 dư 2 từ a đến b:
// let a = 1;
// let b = 100;
// let tong = 0;
// for (i = a; i <= b; i++) {
//     if (i % 5 == 2) { 
//     tong++ //(`${tong += i / i}`)
//     }
// }
// console.log(tong)

//Bài 11: In ra màn hình 0, 5 ,10,15, 20, ... 50:
// let a = 1;
// let b = 50;
// for (i = a; i <= b; i++) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
// }

//Bài 12: In ra màn hình 10, 9, 8, 7, 6, ... 0:
// let a = 10;
// let b = 0;
// for (i = a; i >= b; i--) {
//     console.log(i)
// }

//Bài 13: In ra màn hình 50, 45, 40, .. 0:
// let a = 50;
// let b = 1;
// for (i = a; i >= b; i--) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
// }

//Bài 14: In ra bảng cửu chương 5:
// for (let i = 1; i <= 10; i++) {
//     let x = 5 * i;
//     console.log(`5 x ${i} = ${x}`);
// }


//LUYỆN TẬP VÒNG LẬP CODEGYM JAMES

//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. 
//Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành:
// for (i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i == 99) {
//         alert('Đã hoàn thành');
//     }
// }

//Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi 
//người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. 
//Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ:
// let nhietDo = +prompt('Nhập nhiệt độ:');
// if (nhietDo > 100) {
//     alert('Hãy giảm nhiệt độ')
// } else if (nhietDo < 20) {
//     alert('Hãy tăng nhiệt độ')
// }

//Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let f1 = 0;
// let f2 = 1;
// console.log(f1);
// console.log(f2);
// for (let i = 2; i < 20; i++) {
//     let fn = f1 + f2;
//     console.log(fn)
//     f1 = f2;
//     f2 = fn;
// }

//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let f1 = 0;
// let f2 = 1;
// console.log(f1);
// console.log(f2);
// for (let i = 2; i <= 10; i++) {
//     let fn = f1 + f2;
//     console.log(fn)
//     f1 = f2;
//     f2 = fn;
//     if (fn % 5 == 0) {
//         console.log('Số đầu tiên hết cho 5: ' + fn)
//         break;
//     }
// }

//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci:
// let f1 = 0;
// let f2 = 1;
// let tong = f1 + f2;
// console.log(f1);
// console.log(f2);
// for (let i = 3; i <= 20; i++) {
//     let fn = f1 + f2;
//     tong += fn;
//     console.log(fn)
//     f1 = f2;
//     f2 = fn;
// }
// console.log('Tổng của 20 số đầu tiên trong dãy fibonacci: ' + tong)

//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên:
// let tong = 0;
// for (i = 1; i <= 30; i++){
//     let soChiaHet = 7 * i;
//     tong += i;
// }
// console.log('Tổng 30 số đầu tiên chia hết cho 7 là: ' + tong)

//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia
// hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu 
// số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz":
// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//         continue
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//         continue
//     } else if (i % 3 == 0) {
//         console.log('Fizz')
//         continue
//     }
//     console.log(i)
// }

