### Bài 1: 
*note*
- Khi có sự thay đổi trong file docker-compose.yml thì chỉ cần chạy lại docker-compose up
- Khi muốn thay đổi nội dung trong các file nằm ngoài cấu hình docker cần chạy lại docker-compose up --build ( để build lại image ) => apply sự thay đổi.
> Bản chất chạy --build là build lại image mới, và image cũ sẽ bị chuyển tên và tag thành (none)
-> Cần xóa image cũ: docker rmi image_id
