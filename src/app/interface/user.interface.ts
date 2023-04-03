export interface Course {
  title: string;
  description: string;
  imgName: string;
  imgPath: string;
  teacher: string;
  price: number;
}
export interface cartResponse {
  course: [{ courseId: string; courseName: string; price: number,image:string }];
  totalPrice: number;
  userId: string;
  _id: string;
}
export interface wishlistResponse {
  course: [{ courseId: string; courseName: string; price: number ,image:string}];
  userId: string;
  _id: string;
}
export interface CourseResponse {
  _id: string;
  UserId: string;
  CourseName: string;
  MentorName: string;
  Category: string;
  TotalHr: number;
  ThumbnailImage: string;
  CourseDescription: string;
  VideoModule: { title: string, video: string }[];
  date: string;
  Level: string;
  Language: string;
  Price: number;
}
