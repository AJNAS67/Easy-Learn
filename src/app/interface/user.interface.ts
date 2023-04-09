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
export interface EnrolledCourse {
  _id: string;
  userId: string;
  course: [
    { courseId: string; courseName: string; image: string; price: string }
  ];
  totalPrice: number;
  paymentStatus: boolean;
}
export interface AddToCartResponse {
  message: string;
}
export interface State {
  value: string;
  viewValue: string;
}
export interface Common {
  value: string;
}
export interface LoginResponse {
  access_token: string;
  admin: boolean;
  status: true;
  user: getUserDetailsResp;
}
export interface RegisterResponse {
  message: string;
  isAdded: boolean;
}
export interface PaymentResponse {}
export interface imageUploadResponse {
  api_key: string;
  asset_id: string;
  bytes: number;
  created_at:string;
  formate: string;
  original_filename: string;
  placeholder: boolean;
  resource_type:string;
  type: string;
  public_id: string;
  secure_url: string;
  url: string;
}

export interface VideoUploadResponse {
  api_key: string;
  asset_id: string;
  bit_rate:number;
  duration:number;
  bytes: number;
  created_at:string;
  formate: string;
  frame_rate:number;
  original_filename: string;
  placeholder: boolean;
  resource_type:string;
  type: string;
  public_id: string;
  secure_url: string;
  url: string;
}
export interface profileUpdate {
  fullName: string;
  email: string;
  pinCode: number;
  phoneNumber: number;
  dateofBirth: string;
  state: string;
  district: string;
  city: string;
  address: string;
  userId:string;
}
