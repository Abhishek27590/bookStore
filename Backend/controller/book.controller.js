import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
export const bookUpload = async (req, res) => {
  const { name, price, category, image, title, bookLink } = req.body;

  if (!name || !category || !image || !title || !bookLink) {
    return res.status(404).json({
      status: "false",
      message: "Enter details Properly",
    });
  }
  try {
    const newBook = await Book.create({
      name: name,
      price: 0,
      image: image,
      title: title,
      category: category,
      bookLink: bookLink,
    });
    res.status(200).json({
      status: "true",
      message: "succesful saved",
      newBook,
    });
  } catch (e) {
    res
      .status(400)
      .json({ 
        status: "false",
         message: "Some issue occured while saving" 
    });
  }
};
