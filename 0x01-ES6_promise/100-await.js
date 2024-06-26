import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    // Await both promises simultaneously
    const [photoResponse, userResponse] = await Promise.all([photoPromise, userPromise]);

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
