export interface UserProfile {
  _id?: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  uid: string;
  profileDescription: string;
  profilePhotoUrl: string;
  location: string;
  trefleToken?: string;
  trefleTokenExp?: string;
  createdAt?: string;
  updatedAt?: string;
}
