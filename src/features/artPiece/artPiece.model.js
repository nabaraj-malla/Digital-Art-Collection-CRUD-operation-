export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // to retrieve all art pieces
    return ArtPiece.db;
  }

  static findOne(id) {
    // to retrieve a specific art piece by its id
    const result = ArtPiece.db.find((art) => art.id == id);
    return result;
  }

  static update(id, data) {
    // to update the details of a specific art piece
    const artIndex = ArtPiece.db.findIndex((art) => art.id == id);
    data.id = artIndex + 1;
    ArtPiece.db[artIndex] = data;
    return ArtPiece.db[artIndex];
  }

  static delete(id) {
    // to delete a specific art piece
    const artIndex = ArtPiece.db.findIndex((art) => art.id == id);
    const result = ArtPiece.db.splice(artIndex, 1);
    return result;
  }
}
