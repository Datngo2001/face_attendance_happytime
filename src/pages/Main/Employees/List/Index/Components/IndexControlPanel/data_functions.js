export const listStatusActive = [
    { id: 0, name: "Tất cả" },
    { id: 1, name: "Đang hoạt động" },
    { id: 2, name: "Không hoạt động" },
];

export const listStatusEmployees = [
    { id: 0, name: "Tất cả" },
    { id: 1, name: "Sắp đi làm" },
    { id: 2, name: "Đang làm việc" },
    { id: 3, name: "Đã nghỉ việc" },
    { id: 4, name: "Nghỉ không lương dài hạn" },
    { id: 5, name: "Nghỉ thai sản" },
];

export const listTypeEmployees = [
    { id: 0, name: "Tất cả" },
    { id: 1, name: "Chính thức" },
    { id: 2, name: "Thử việc" },
    { id: 3, name: "Thực tập" },
    { id: 4, name: "Cộng tác viên" },
    { id: 5, name: "Học việc" },
];

export const listStatusUsingHappyTime = [
    { id: 0, name: "Tất cả" },
    { id: 1, name: "Đã sử dụng" },
    { id: 2, name: "Chưa sử dụng" },
];

export const listRoles = [
    { id: 0, name: "Nhân viên" },
    { id: 1, name: "Admin" },
];

export const listEmptyFields = [
    { id: 0, name: "Số điện thoại" },
    { id: 1, name: "Email cá nhân" },
    { id: 2, name: "Email công ty" },
    { id: 3, name: "Mã nhân viên" },
    { id: 4, name: "Ảnh đại diện" },
    { id: 5, name: "Ngày bắt đầu đi làm" },
    { id: 6, name: "Ngày bắt đầu chính thức" },
    { id: 7, name: "Ngày nghỉ việc" },
    { id: 8, name: "Ngày sinh" },
    { id: 9, name: "Giới tính" },
    { id: 10, name: "Số CCCD/CMND/Hộ chiếu" },
    { id: 11, name: "Ngày cấp" },
    { id: 12, name: "Nơi cấp" },
    { id: 13, name: "Địa chỉ thường trú" },
    { id: 14, name: "Địa chỉ tạm trú" },
    { id: 15, name: "Học vấn" },
    { id: 16, name: "Trường học" },
    { id: 17, name: "Chuyên ngành" },
    { id: 18, name: "Năm tốt nghiệp" },
    { id: 19, name: "Tình trạng hôn nhân" },
    { id: 20, name: "Mã số thuế" },
    { id: 21, name: "Số tài khoản ngân hàng" },
    { id: 22, name: "Ngân hàng" },
    { id: 23, name: "Chi nhánh ngân hàng" },
    { id: 24, name: "Loại hình nhân sự" },
    { id: 25, name: "" },
];

export const checkDuplicateElement = (arr) => {
    let tempArr = [];
    let temp;
    let count = 0;
    if (arr && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            count = 0;
            for (let j = i + 1; j < arr.length; j++) {
                if (parseInt(arr[i]) === parseInt(arr[j])) count++;
            }
            count > 0 && (temp = parseInt(arr[i]));
        }
        tempArr = arr.filter((e) => {
            return temp !== parseInt(e);
        });
    }

    return tempArr;
};
