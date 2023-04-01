export interface Course {
  title: string;
  description: string;
  imgName: string;
  imgPath: string;
  teacher: string;
  price: number;
}
export interface cartResponse {
  course: [{ courseId: string; courseName: string; price: number }];
  totalPrice: number;
  userId: string;
  _id: string;
}
