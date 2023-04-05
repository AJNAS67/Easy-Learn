export interface Course {
  title: string;
  description: string;
  imgName: string;
  imgPath: string;
  teacher: string;
  price: number;
}
export interface cartResponse {
  course: [
    { courseId: string; courseName: string; price: number; image: string }
  ];
  totalPrice: number;
  userId: string;
  _id: string;
}
export interface wishlistResponse {
  course: [
    { courseId: string; courseName: string; price: number; image: string }
  ];
  userId: string;
  _id: string;
}
export interface CourseResponse {
  _id: string;
  UserId: string;
  CourseName: string;
  MentorName: string;
  Category: Category[];
  TotalHr: number;
  ThumbnailImage: string;
  CourseDescription: string;
  VideoModule: { title: string; video: string }[];
  date: string;
  Level: string;
  Language: string;
  Price: number;
  Popularity: boolean;
  Trending: boolean;
  Featured: boolean;
  AI_and_ML: boolean;
}
export interface Category {
  _id: string;
  course_category: string;
}
export interface DeleteResponse {
  acknowledged: boolean;
  deletedCount: number;
}
export interface getUserDetailsResp {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  profile_pic: string;
}
export interface addTocartResponse {
  message: string;
}
export interface Category {
  _id: string;
  course_category: string;
}
