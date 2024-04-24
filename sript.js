'use strict';

const func = function () {
  swal({
    title: 'Trả lời câu hỏi',
    text: 'Manh có phải đàn ông không',
    icon: 'warning',
    buttons: ['Không', 'Có'],
  }).then(yes => {
    if (yes) {
      swal(
        'Bạn trả lời rất đúng',
        'Manh là đàng đàn ống chính hiệu',
        'success'
      );
    } else {
      swal('Bạn trả lời sai', 'hãy trả lời lại đi', 'error').then(yes => {
        if (yes) return func();
      });
    }
  });
};

func();
