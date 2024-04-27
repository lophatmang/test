'use strict';

const func = function () {
  swal({
    title: 'Trả lời câu hỏi',
    text: 'Bố của sếp Đạt tên Trung Bún có đúng không ',
    icon: 'warning',
    buttons: ['Không', 'Có'],
  }).then(yes => {
    if (yes) {
      swal('Bạn trả lời đúng', 'tên chú là Trung Bún', 'success');
    } else {
      swal('Bạn trả lời sai', 'là Trung Thồ nha ', 'error').then(yes => {
        if (yes) return func();
      });
    }
  });
};

func();
