// Lấy tất cả các phần tử có class "hidden-text"
let object_1 = document.querySelectorAll('.object');
let object_2 = document.querySelectorAll('.img');
let object_3 = document.querySelectorAll('.object_3');
let li_1 = document.querySelectorAll(".object-li-1");
let li_2 = document.querySelectorAll(".object-li-2");
let li_3 = document.querySelectorAll(".object-li-3");
let li_4 = document.querySelectorAll(".object-li-4");
let object_5 = document.querySelectorAll('.object_5');
let object_6 = document.querySelectorAll('.object_6');
let object_7 = document.querySelectorAll('.object_7');
let object_8 = document.querySelectorAll('.object_8');
let object_9 = document.querySelectorAll('.object_9');
let object_10 = document.querySelectorAll('.object_10');
let object_12 = document.querySelectorAll('.object_12');
let object_13 = document.querySelectorAll('.object_13');
let object_14 = document.querySelectorAll('.object_14');
let object_15= document.querySelectorAll('.object_15');
let object_16 = document.querySelectorAll('.object_16');
let object_17 = document.querySelectorAll('.object_17');
let object_18 = document.querySelectorAll('.object_18');
let object_19 = document.querySelectorAll('.object_19');

// Cấu hình IntersectionObserver
const options = {
    root: null, // viewport mặc định
    threshold: 0 // Kích hoạt khi 50% phần tử xuất hiện trong viewport
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Nếu phần tử xuất hiện trong viewport, thêm class animation
        if (entry.target.classList.contains('object')) {
          entry.target.classList.add('animate');
        }
        if (entry.target.classList.contains('img')) {
          entry.target.classList.add('animate_1');
        }
        if (entry.target.classList.contains('object_3')) {
            entry.target.classList.add('animate_3');
          }
          if (entry.target.classList.contains('object-li-1')) {
            entry.target.classList.add('animate-li-1');
          }
          if (entry.target.classList.contains('object-li-2')) {
            entry.target.classList.add('animate-li-2');
          }
          if (entry.target.classList.contains('object-li-3')) {
            entry.target.classList.add('animate-li-3');
          }
          if (entry.target.classList.contains('object-li-4')) {
            entry.target.classList.add('animate-li-4');
          }
          if (entry.target.classList.contains('object_5')) {
            entry.target.classList.add('animate_5');
          }
          if (entry.target.classList.contains('object_6')) {
            entry.target.classList.add('animate_6');
          }
          if (entry.target.classList.contains('object_7')) {
            entry.target.classList.add('animate_6');
          }
          if (entry.target.classList.contains('object_8')) {
            entry.target.classList.add('animate_5');
          }
          if (entry.target.classList.contains('object_9')) {
            entry.target.classList.add('animate_5');
          }
          if (entry.target.classList.contains('object_10')) {
            entry.target.classList.add('animate_5');
          }
          if (entry.target.classList.contains('object_12')) {
            entry.target.classList.add('animate_6');
          }
          if (entry.target.classList.contains('object_13')) {
            entry.target.classList.add('animate_13');
          }
          if (entry.target.classList.contains('object_14')) {
            entry.target.classList.add('animate_14');
          }
          if (entry.target.classList.contains('object_15')) {
            entry.target.classList.add('animate_15');
          }
          if (entry.target.classList.contains('object_16')) {
            entry.target.classList.add('animate_16');
          }
          if (entry.target.classList.contains('object_17')) {
            entry.target.classList.add('animate_17');
          }
          if (entry.target.classList.contains('object_18')) {
            entry.target.classList.add('animate_18');
          }
          if (entry.target.classList.contains('object_19')) {
            entry.target.classList.add('animate_19');
          }
      } else {
        // Khi phần tử rời khỏi viewport, xóa class để animation có thể chạy lại
        if (entry.target.classList.contains('object')) {
            entry.target.classList.remove('animate');
          }
          if (entry.target.classList.contains('img')) {
            entry.target.classList.remove('animate_1');
          }
          if (entry.target.classList.contains('object_3')) {
            entry.target.classList.remove('animate_3');
          }
          if (entry.target.classList.contains('object-li-1')) {
            entry.target.classList.remove('animate-li-1');
          }
          if (entry.target.classList.contains('object-li-2')) {
            entry.target.classList.remove('animate-li-2');
          }
          if (entry.target.classList.contains('object-li-3')) {
            entry.target.classList.remove('animate-li-3');
          }
          if (entry.target.classList.contains('object-li-4')) {
            entry.target.classList.remove('animate-li-4');
          }
          if (entry.target.classList.contains('object_5')) {
            entry.target.classList.remove('animate_5');
          }
          if (entry.target.classList.contains('object_6')) {
            entry.target.classList.remove('animate_6');
          }
          if (entry.target.classList.contains('object_7')) {
            entry.target.classList.remove('animate_6');
          }
          if (entry.target.classList.contains('object_8')) {
            entry.target.classList.remove('animate_5');
          }
          if (entry.target.classList.contains('object_9')) {
            entry.target.classList.remove('animate_5');
          }
          if (entry.target.classList.contains('object_10')) {
            entry.target.classList.remove('animate_5');
          }
          if (entry.target.classList.contains('object_12')) {
            entry.target.classList.remove('animate_6');
          }
          if (entry.target.classList.contains('object_13')) {
            entry.target.classList.remove('animate_13');
          }
          if (entry.target.classList.contains('object_14')) {
            entry.target.classList.remove('animate_14');
          }
          if (entry.target.classList.contains('object_15')) {
            entry.target.classList.remove('animate_15');
          }
          if (entry.target.classList.contains('object_16')) {
            entry.target.classList.remove('animate_16');
          }
          if (entry.target.classList.contains('object_17')) {
            entry.target.classList.remove('animate_17');
          }
          if (entry.target.classList.contains('object_18')) {
            entry.target.classList.remove('animate_18');
          }
          if (entry.target.classList.contains('object_19')) {
            entry.target.classList.remove('animate_19');
          }
      }
    });
  }, options);

// Quan sát từng phần tử có class "hidden-text"
object_1.forEach(text => observer.observe(text));
object_2.forEach(text => observer.observe(text));
object_3.forEach(text => observer.observe(text));
li_1.forEach(text => observer.observe(text));
li_2.forEach(text => observer.observe(text));
li_3.forEach(text => observer.observe(text));
li_4.forEach(text => observer.observe(text));
object_5.forEach(text => observer.observe(text));
object_6.forEach(text => observer.observe(text));
object_7.forEach(text => observer.observe(text));
object_8.forEach(text => observer.observe(text));
object_9.forEach(text => observer.observe(text));
object_10.forEach(text => observer.observe(text));
object_12.forEach(text => observer.observe(text));
object_13.forEach(text => observer.observe(text));
object_14.forEach(text => observer.observe(text));
object_15.forEach(text => observer.observe(text));
object_16.forEach(text => observer.observe(text));
object_17.forEach(text => observer.observe(text));
object_18.forEach(text => observer.observe(text));
object_19.forEach(text => observer.observe(text));



// Smooth scroll cho các liên kết trong nav
// const navLinks = document.querySelectorAll('nav a');
// navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
//         window.scrollTo({
//             top: targetSection.offsetTop, // Trừ khoảng cách của thanh nav
//             behavior: 'smooth'
//         });
//     });
// });