exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { productId: 2, ingredientId: 79, quantity: 2 },
        { productId: 2, ingredientId: 50, quantity: 2 },
        { productId: 3, ingredientId: 78, quantity: 3 },
        { productId: 4, ingredientId: 50, quantity: 2 },
        { productId: 4, ingredientId: 78, quantity: 2 },
        { productId: 4, ingredientId: 254, quantity: 1 },
        { productId: 5, ingredientId: 50, quantity: 1 },
        { productId: 5, ingredientId: 200, quantity: 2 },
        { productId: 5, ingredientId: 78, quantity: 2 },
        { productId: 6, ingredientId: 26, quantity: 2 },
        { productId: 6, ingredientId: 50, quantity: 2 },
        { productId: 6, ingredientId: 78, quantity: 2 },
        { productId: 7, ingredientId: 61, quantity: 1 },
        { productId: 7, ingredientId: 71, quantity: 1 },
        { productId: 7, ingredientId: 78, quantity: 2 },
        { productId: 8, ingredientId: 61, quantity: 1 },
        { productId: 8, ingredientId: 71, quantity: 1 },
        { productId: 8, ingredientId: 82, quantity: 1 },
        { productId: 8, ingredientId: 78, quantity: 2 },
        { productId: 9, ingredientId: 63, quantity: 1 },
        { productId: 9, ingredientId: 50, quantity: 3 },
        { productId: 9, ingredientId: 72, quantity: 2 },
        { productId: 9, ingredientId: 253, quantity: 1 },
        { productId: 10, ingredientId: 61, quantity: 1 },
        { productId: 10, ingredientId: 100, quantity: 1 },
        { productId: 10, ingredientId: 149, quantity: 1 },
        { productId: 10, ingredientId: 78, quantity: 1 },
        { productId: 11, ingredientId: 12, quantity: 3 },
        { productId: 11, ingredientId: 50, quantity: 1 },
        { productId: 11, ingredientId: 92, quantity: 2 },
        { productId: 11, ingredientId: 78, quantity: 3 },
        { productId: 13, ingredientId: 254, quantity: 1 },
        { productId: 13, ingredientId: 50, quantity: 3 },
        { productId: 14, ingredientId: 193, quantity: 2 },
        { productId: 14, ingredientId: 50, quantity: 4 },
        { productId: 15, ingredientId: 61, quantity: 1 },
        { productId: 15, ingredientId: 82, quantity: 1 },
        { productId: 15, ingredientId: 62, quantity: 1 },
        { productId: 15, ingredientId: 72, quantity: 2 },
        { productId: 16, ingredientId: 71, quantity: 2 },
        { productId: 17, ingredientId: 100, quantity: 2 },
        { productId: 17, ingredientId: 72, quantity: 3 },
        { productId: 18, ingredientId: 82, quantity: 1 },
        { productId: 18, ingredientId: 111, quantity: 1 },
        { productId: 18, ingredientId: 149, quantity: 1 },
        { productId: 19, ingredientId: 193, quantity: 2 },
        { productId: 19, ingredientId: 3, quantity: 2 },
        { productId: 20, ingredientId: 3, quantity: 2 },
        { productId: 20, ingredientId: 82, quantity: 1 },
        { productId: 20, ingredientId: 100, quantity: 2 },
        { productId: 21, ingredientId: 63, quantity: 1 },
        { productId: 21, ingredientId: 84, quantity: 2 },
        { productId: 22, ingredientId: 98, quantity: 3 },
        { productId: 22, ingredientId: 223, quantity: 1 },
        { productId: 23, ingredientId: 12, quantity: 1 },
        { productId: 23, ingredientId: 26, quantity: 2 },
        { productId: 23, ingredientId: 62, quantity: 1 },
        { productId: 23, ingredientId: 78, quantity: 3 },
        { productId: 24, ingredientId: 100, quantity: 1 },
        { productId: 24, ingredientId: 99, quantity: 3 },
        { productId: 24, ingredientId: 96, quantity: 1 },
        { productId: 24, ingredientId: 88, quantity: 2 },
        { productId: 28, ingredientId: 62, quantity: 1 },
        { productId: 28, ingredientId: 73, quantity: 2 },
        { productId: 28, ingredientId: 78, quantity: 3 },
        { productId: 28, ingredientId: 253, quantity: 1 },
        { productId: 29, ingredientId: 1, quantity: 2 },
        { productId: 29, ingredientId: 50, quantity: 2 },
        { productId: 29, ingredientId: 111, quantity: 2 },
        { productId: 29, ingredientId: 78, quantity: 2 },
        { productId: 30, ingredientId: 254, quantity: 1 },
        { productId: 30, ingredientId: 63, quantity: 1 },
        { productId: 30, ingredientId: 27, quantity: 2 },
        { productId: 31, ingredientId: 50, quantity: 4 },
        { productId: 31, ingredientId: 60, quantity: 1 },
        { productId: 31, ingredientId: 72, quantity: 1 },
        { productId: 32, ingredientId: 61, quantity: 1 },
        { productId: 32, ingredientId: 4, quantity: 1 },
        { productId: 33, ingredientId: 49, quantity: 2 },
        { productId: 33, ingredientId: 50, quantity: 1 },
        { productId: 33, ingredientId: 59, quantity: 1 },
        { productId: 33, ingredientId: 200, quantity: 1 },
        { productId: 34, ingredientId: 62, quantity: 1 },
        { productId: 34, ingredientId: 253, quantity: 1 },
        { productId: 34, ingredientId: 78, quantity: 5 },
        { productId: 35, ingredientId: 254, quantity: 1 },
        { productId: 35, ingredientId: 63, quantity: 1 },
        { productId: 35, ingredientId: 81, quantity: 2 },
        { productId: 36, ingredientId: 62, quantity: 1 },
        { productId: 36, ingredientId: 50, quantity: 2 },
        { productId: 36, ingredientId: 217, quantity: 2 },
        { productId: 36, ingredientId: 78, quantity: 3 },
        { productId: 37, ingredientId: 90, quantity: 3 },
        { productId: 37, ingredientId: 50, quantity: 2 },
        { productId: 37, ingredientId: 49, quantity: 2 },
        { productId: 37, ingredientId: 78, quantity: 4 },
        { productId: 38, ingredientId: 49, quantity: 2 },
        { productId: 38, ingredientId: 92, quantity: 2 },
        { productId: 38, ingredientId: 171, quantity: 2 },
        { productId: 38, ingredientId: 78, quantity: 3 },
        { productId: 39, ingredientId: 110, quantity: 1 },
        { productId: 39, ingredientId: 73, quantity: 2 },
        { productId: 40, ingredientId: 110, quantity: 1 },
        { productId: 40, ingredientId: 148, quantity: 2 },
        { productId: 41, ingredientId: 110, quantity: 1 },
        { productId: 41, ingredientId: 200, quantity: 2 },
        { productId: 42, ingredientId: 110, quantity: 1 },
        { productId: 42, ingredientId: 94, quantity: 2 },
        { productId: 42, ingredientId: 89, quantity: 2 },
        { productId: 42, ingredientId: 76, quantity: 3 },
        { productId: 43, ingredientId: 63, quantity: 1 },
        { productId: 43, ingredientId: 78, quantity: 1 },
        { productId: 43, ingredientId: 253, quantity: 1 },
        { productId: 44, ingredientId: 27, quantity: 3 },
        { productId: 44, ingredientId: 62, quantity: 1 },
        { productId: 44, ingredientId: 253, quantity: 1 },
        { productId: 45, ingredientId: 49, quantity: 1 },
        { productId: 45, ingredientId: 73, quantity: 2 },
        { productId: 45, ingredientId: 255, quantity: 1 },
        { productId: 46, ingredientId: 129, quantity: 1 },
        { productId: 46, ingredientId: 128, quantity: 1 },
        { productId: 46, ingredientId: 253, quantity: 1 },
        { productId: 47, ingredientId: 1, quantity: 1 },
        { productId: 47, ingredientId: 255, quantity: 2 },
        { productId: 48, ingredientId: 88, quantity: 3 },
        { productId: 48, ingredientId: 96, quantity: 1 },
        { productId: 48, ingredientId: 111, quantity: 1 },
        { productId: 50, ingredientId: 70, quantity: 1 },
        { productId: 52, ingredientId: 51, quantity: 1 },
        { productId: 52, ingredientId: 62, quantity: 1 },
        { productId: 52, ingredientId: 27, quantity: 2 },
        { productId: 53, ingredientId: 27, quantity: 1 },
        { productId: 53, ingredientId: 51, quantity: 1 },
        { productId: 53, ingredientId: 62, quantity: 1 },
        { productId: 53, ingredientId: 200, quantity: 1 },
        { productId: 54, ingredientId: 27, quantity: 2 },
        { productId: 54, ingredientId: 62, quantity: 1 },
        { productId: 54, ingredientId: 59, quantity: 1 },
        { productId: 54, ingredientId: 253, quantity: 1 },
        { productId: 55, ingredientId: 51, quantity: 3 },
        { productId: 55, ingredientId: 253, quantity: 1 },
        { productId: 56, ingredientId: 51, quantity: 2 },
        { productId: 56, ingredientId: 59, quantity: 1 },
        { productId: 56, ingredientId: 253, quantity: 1 },
        { productId: 57, ingredientId: 51, quantity: 2 },
        { productId: 57, ingredientId: 43, quantity: 1 },
        { productId: 57, ingredientId: 59, quantity: 1 },
        { productId: 58, ingredientId: 12, quantity: 1 },
        { productId: 58, ingredientId: 51, quantity: 2 },
        { productId: 58, ingredientId: 59, quantity: 1 },
        { productId: 59, ingredientId: 69, quantity: 1 },
        { productId: 60, ingredientId: 105, quantity: 2 },
        { productId: 61, ingredientId: 59, quantity: 3 },
        { productId: 62, ingredientId: 59, quantity: 1 },
        { productId: 63, ingredientId: 59, quantity: 2 },
        { productId: 65, ingredientId: 81, quantity: 2 },
        { productId: 65, ingredientId: 79, quantity: 1 },
        { productId: 65, ingredientId: 78, quantity: 1 },
        { productId: 66, ingredientId: 78, quantity: 75 },
        { productId: 67, ingredientId: 77, quantity: 1 },
        { productId: 67, ingredientId: 78, quantity: 3 },
        { productId: 68, ingredientId: 81, quantity: 2 },
        { productId: 68, ingredientId: 77, quantity: 1 },
        { productId: 69, ingredientId: 79, quantity: 1 },
        { productId: 69, ingredientId: 77, quantity: 2 },
        { productId: 70, ingredientId: 79, quantity: 1 },
        { productId: 70, ingredientId: 78, quantity: 2 },
        { productId: 101, ingredientId: 78, quantity: 5 },
        { productId: 101, ingredientId: 76, quantity: 3 },
        { productId: 101, ingredientId: 74, quantity: 3 },
        { productId: 102, ingredientId: 89, quantity: 5 },
        { productId: 102, ingredientId: 76, quantity: 3 },
        { productId: 102, ingredientId: 74, quantity: 1 },
        { productId: 102, ingredientId: 162, quantity: 5 },
        { productId: 103, ingredientId: 94, quantity: 3 },
        { productId: 103, ingredientId: 43, quantity: 1 },
        { productId: 103, ingredientId: 47, quantity: 1 },
        { productId: 104, ingredientId: 94, quantity: 4 },
        { productId: 104, ingredientId: 74, quantity: 1 },
        { productId: 104, ingredientId: 152, quantity: 1 },
        { productId: 105, ingredientId: 65, quantity: 1 },
        { productId: 106, ingredientId: 64, quantity: 2 },
        { productId: 106, ingredientId: 76, quantity: 1 },
        { productId: 106, ingredientId: 200, quantity: 1 },
        { productId: 106, ingredientId: 229, quantity: 3 },
        { productId: 107, ingredientId: 152, quantity: 3 },
        { productId: 107, ingredientId: 64, quantity: 1 },
        { productId: 107, ingredientId: 230, quantity: 1 },
        { productId: 108, ingredientId: 73, quantity: 2 },
        { productId: 108, ingredientId: 229, quantity: 6 },
        { productId: 109, ingredientId: 94, quantity: 5 },
        { productId: 109, ingredientId: 74, quantity: 4 },
        { productId: 110, ingredientId: 25, quantity: 3 },
        { productId: 111, ingredientId: 25, quantity: 2 },
        { productId: 112, ingredientId: 86, quantity: 3 },
        { productId: 112, ingredientId: 77, quantity: 6 },
        { productId: 112, ingredientId: 71, quantity: 4 },
        { productId: 113, ingredientId: 193, quantity: 2 },
        { productId: 113, ingredientId: 3, quantity: 1 },
        { productId: 113, ingredientId: 218, quantity: 1 },
        { productId: 114, ingredientId: 193, quantity: 4 },
        { productId: 114, ingredientId: 79, quantity: 4 },
        { productId: 114, ingredientId: 221, quantity: 1 },
        { productId: 115, ingredientId: 193, quantity: 2 },
        { productId: 115, ingredientId: 3, quantity: 1 },
        { productId: 115, ingredientId: 82, quantity: 1 },
        { productId: 115, ingredientId: 84, quantity: 3 },
        { productId: 116, ingredientId: 62, quantity: 1 },
        { productId: 116, ingredientId: 27, quantity: 2 },
        { productId: 116, ingredientId: 59, quantity: 1 },
        { productId: 116, ingredientId: 253, quantity: 1 },
        { productId: 117, ingredientId: 142, quantity: 1 },
        { productId: 117, ingredientId: 255, quantity: 1 },
        { productId: 118, ingredientId: 62, quantity: 1 },
        { productId: 118, ingredientId: 59, quantity: 1 },
        { productId: 118, ingredientId: 253, quantity: 1 },
        { productId: 119, ingredientId: 62, quantity: 1 },
        { productId: 119, ingredientId: 59, quantity: 1 },
        { productId: 119, ingredientId: 73, quantity: 3 },
        { productId: 119, ingredientId: 253, quantity: 1 },
        { productId: 120, ingredientId: 62, quantity: 1 },
        { productId: 120, ingredientId: 88, quantity: 3 },
        { productId: 120, ingredientId: 254, quantity: 1 },
        { productId: 121, ingredientId: 62, quantity: 1 },
        { productId: 121, ingredientId: 253, quantity: 1 },
        { productId: 121, ingredientId: 91, quantity: 2 },
        { productId: 121, ingredientId: 27, quantity: 1 },
        { productId: 122, ingredientId: 62, quantity: 1 },
        { productId: 122, ingredientId: 111, quantity: 1 },
        { productId: 122, ingredientId: 181, quantity: 2 },
        { productId: 123, ingredientId: 111, quantity: 1 },
        { productId: 123, ingredientId: 171, quantity: 2 },
        { productId: 124, ingredientId: 12, quantity: 1 },
        { productId: 124, ingredientId: 49, quantity: 3 },
        { productId: 124, ingredientId: 62, quantity: 1 },
        { productId: 125, ingredientId: 73, quantity: 3 },
        { productId: 126, ingredientId: 49, quantity: 3 },
        { productId: 127, ingredientId: 1, quantity: 3 },
        { productId: 128, ingredientId: 200, quantity: 3 },
        { productId: 129, ingredientId: 26, quantity: 3 },
        { productId: 130, ingredientId: 171, quantity: 3 },
        { productId: 131, ingredientId: 92, quantity: 3 },
        { productId: 132, ingredientId: 181, quantity: 3 },
        { productId: 133, ingredientId: 194, quantity: 3 },
        { productId: 134, ingredientId: 234, quantity: 1 },
        { productId: 134, ingredientId: 232, quantity: 1 },
        { productId: 134, ingredientId: 233, quantity: 2 },
        { productId: 135, ingredientId: 234, quantity: 1 },
        { productId: 135, ingredientId: 233, quantity: 2 },
        { productId: 136, ingredientId: 231, quantity: 2 },
        { productId: 136, ingredientId: 230, quantity: 2 },
        { productId: 136, ingredientId: 233, quantity: 1 },
        { productId: 137, ingredientId: 272, quantity: 1 },
        { productId: 137, ingredientId: 234, quantity: 2 },
        { productId: 137, ingredientId: 232, quantity: 2 },
        { productId: 138, ingredientId: 94, quantity: 3 },
        { productId: 138, ingredientId: 232, quantity: 1 },
        { productId: 138, ingredientId: 234, quantity: 2 },
        { productId: 139, ingredientId: 26, quantity: 1 },
        { productId: 139, ingredientId: 200, quantity: 1 },
        { productId: 140, ingredientId: 71, quantity: 3 },
        { productId: 141, ingredientId: 1, quantity: 2 },
        { productId: 142, ingredientId: 49, quantity: 2 },
        { productId: 143, ingredientId: 81, quantity: 3 },
        { productId: 144, ingredientId: 171, quantity: 2 },
        { productId: 145, ingredientId: 90, quantity: 3 },
        { productId: 146, ingredientId: 92, quantity: 2 },
        { productId: 147, ingredientId: 97, quantity: 2 },
        { productId: 150, ingredientId: 73, quantity: 2 },
        { productId: 150, ingredientId: 229, quantity: 2 },
        { productId: 151, ingredientId: 229, quantity: 2 },
        { productId: 152, ingredientId: 74, quantity: 3 },
        { productId: 153, ingredientId: 76, quantity: 1 },
        { productId: 153, ingredientId: 229, quantity: 1 },
        { productId: 154, ingredientId: 76, quantity: 2 },
        { productId: 154, ingredientId: 229, quantity: 2 },
        { productId: 155, ingredientId: 229, quantity: 2 },
        { productId: 155, ingredientId: 89, quantity: 3 },
        { productId: 155, ingredientId: 26, quantity: 1 },
        { productId: 172, ingredientId: 140, quantity: 1 },
        { productId: 172, ingredientId: 180, quantity: 3 },
        { productId: 172, ingredientId: 81, quantity: 1 },
        { productId: 172, ingredientId: 61, quantity: 1 },
        { productId: 173, ingredientId: 72, quantity: 4 },
        { productId: 173, ingredientId: 71, quantity: 3 },
        { productId: 173, ingredientId: 78, quantity: 2 },
        { productId: 173, ingredientId: 63, quantity: 2 },
        { productId: 174, ingredientId: 180, quantity: 3 },
        { productId: 174, ingredientId: 193, quantity: 2 },
        { productId: 174, ingredientId: 50, quantity: 1 },
        { productId: 174, ingredientId: 61, quantity: 1 },
        { productId: 175, ingredientId: 93, quantity: 3 },
        { productId: 175, ingredientId: 61, quantity: 1 },
        { productId: 175, ingredientId: 180, quantity: 3 },
        { productId: 176, ingredientId: 149, quantity: 1 },
        { productId: 176, ingredientId: 62, quantity: 2 },
        { productId: 176, ingredientId: 180, quantity: 3 },
        { productId: 176, ingredientId: 71, quantity: 4 },
        { productId: 177, ingredientId: 180, quantity: 3 },
        { productId: 177, ingredientId: 218, quantity: 1 },
        { productId: 177, ingredientId: 82, quantity: 3 },
        { productId: 177, ingredientId: 84, quantity: 2 },
        { productId: 178, ingredientId: 99, quantity: 5 },
        { productId: 178, ingredientId: 180, quantity: 3 },
        { productId: 178, ingredientId: 105, quantity: 1 },
        { productId: 179, ingredientId: 87, quantity: 5 },
        { productId: 180, ingredientId: 50, quantity: 1 },
        { productId: 180, ingredientId: 78, quantity: 2 },
        { productId: 182, ingredientId: 193, quantity: 2 },
        { productId: 182, ingredientId: 81, quantity: 2 },
        { productId: 182, ingredientId: 72, quantity: 2 },
        { productId: 182, ingredientId: 75, quantity: 2 },
        { productId: 183, ingredientId: 78, quantity: 1 },
        { productId: 183, ingredientId: 100, quantity: 3 },
        { productId: 183, ingredientId: 50, quantity: 2 },
        { productId: 184, ingredientId: 50, quantity: 1 },
        { productId: 184, ingredientId: 60, quantity: 1 },
        { productId: 184, ingredientId: 78, quantity: 2 },
        { productId: 185, ingredientId: 193, quantity: 2 },
        { productId: 185, ingredientId: 61, quantity: 1 },
        { productId: 185, ingredientId: 50, quantity: 2 },
        { productId: 185, ingredientId: 72, quantity: 2 },
        { productId: 186, ingredientId: 193, quantity: 3 },
        { productId: 186, ingredientId: 50, quantity: 1 },
        { productId: 186, ingredientId: 78, quantity: 2 },
        { productId: 187, ingredientId: 50, quantity: 1 },
        { productId: 187, ingredientId: 75, quantity: 3 },
        { productId: 187, ingredientId: 78, quantity: 2 },
        { productId: 188, ingredientId: 81, quantity: 3 },
        { productId: 188, ingredientId: 50, quantity: 1 },
        { productId: 188, ingredientId: 78, quantity: 2 },
        { productId: 189, ingredientId: 1, quantity: 3 },
        { productId: 189, ingredientId: 50, quantity: 1 },
        { productId: 189, ingredientId: 255, quantity: 1 },
        { productId: 189, ingredientId: 78, quantity: 2 },
        { productId: 190, ingredientId: 62, quantity: 1 },
        { productId: 190, ingredientId: 50, quantity: 2 },
        { productId: 190, ingredientId: 181, quantity: 3 },
        { productId: 190, ingredientId: 78, quantity: 2 },
        { productId: 191, ingredientId: 50, quantity: 1 },
        { productId: 191, ingredientId: 217, quantity: 1 },
        { productId: 191, ingredientId: 78, quantity: 2 },
        { productId: 192, ingredientId: 98, quantity: 3 },
        { productId: 192, ingredientId: 61, quantity: 1 },
        { productId: 192, ingredientId: 218, quantity: 1 },
        { productId: 193, ingredientId: 68, quantity: 1 },
        { productId: 195, ingredientId: 79, quantity: 2 },
        { productId: 195, ingredientId: 111, quantity: 2 },
        { productId: 196, ingredientId: 27, quantity: 2 },
        { productId: 196, ingredientId: 79, quantity: 2 },
        { productId: 197, ingredientId: 63, quantity: 1 },
        { productId: 197, ingredientId: 79, quantity: 2 },
        { productId: 198, ingredientId: 79, quantity: 2 },
        { productId: 199, ingredientId: 199, quantity: 2 },
        { productId: 199, ingredientId: 79, quantity: 2 },
        { productId: 201, ingredientId: 83, quantity: 2 },
        { productId: 201, ingredientId: 81, quantity: 2 },
        { productId: 201, ingredientId: 71, quantity: 2 },
        { productId: 201, ingredientId: 62, quantity: 1 },
        { productId: 202, ingredientId: 180, quantity: 4 },
        { productId: 202, ingredientId: 148, quantity: 2 },
        { productId: 202, ingredientId: 221, quantity: 1 },
        { productId: 202, ingredientId: 71, quantity: 2 },
        { productId: 203, ingredientId: 60, quantity: 2 },
        { productId: 203, ingredientId: 86, quantity: 3 },
        { productId: 203, ingredientId: 170, quantity: 2 },
        { productId: 203, ingredientId: 16, quantity: 1 },
        { productId: 204, ingredientId: 193, quantity: 2 },
        { productId: 204, ingredientId: 86, quantity: 3 },
        { productId: 204, ingredientId: 220, quantity: 1 },
        { productId: 204, ingredientId: 16, quantity: 1 },
        { productId: 205, ingredientId: 100, quantity: 1 },
        { productId: 205, ingredientId: 86, quantity: 3 },
        { productId: 205, ingredientId: 149, quantity: 1 },
        { productId: 205, ingredientId: 220, quantity: 1 },
        { productId: 206, ingredientId: 60, quantity: 1 },
        { productId: 206, ingredientId: 84, quantity: 3 },
        { productId: 206, ingredientId: 181, quantity: 1 },
        { productId: 206, ingredientId: 71, quantity: 3 },
        { productId: 207, ingredientId: 26, quantity: 2 },
        { productId: 207, ingredientId: 111, quantity: 1 },
        { productId: 207, ingredientId: 171, quantity: 1 },
        { productId: 207, ingredientId: 73, quantity: 3 },
        { productId: 208, ingredientId: 179, quantity: 2 },
        { productId: 208, ingredientId: 81, quantity: 2 },
        { productId: 208, ingredientId: 86, quantity: 1 },
        { productId: 208, ingredientId: 82, quantity: 1 },
        { productId: 209, ingredientId: 99, quantity: 3 },
        { productId: 209, ingredientId: 86, quantity: 1 },
        { productId: 209, ingredientId: 72, quantity: 2 },
        { productId: 209, ingredientId: 193, quantity: 1 },
        { productId: 210, ingredientId: 3, quantity: 2 },
        { productId: 210, ingredientId: 50, quantity: 2 },
        { productId: 210, ingredientId: 86, quantity: 3 },
        { productId: 210, ingredientId: 220, quantity: 1 },
        { productId: 211, ingredientId: 3, quantity: 1 },
        { productId: 211, ingredientId: 50, quantity: 1 },
        { productId: 211, ingredientId: 111, quantity: 1 },
        { productId: 211, ingredientId: 59, quantity: 1 },
        { productId: 212, ingredientId: 3, quantity: 2 },
        { productId: 212, ingredientId: 86, quantity: 3 },
        { productId: 212, ingredientId: 221, quantity: 1 },
        { productId: 212, ingredientId: 71, quantity: 2 },
        { productId: 213, ingredientId: 193, quantity: 2 },
        { productId: 213, ingredientId: 3, quantity: 2 },
        { productId: 213, ingredientId: 86, quantity: 3 },
        { productId: 213, ingredientId: 220, quantity: 1 },
        { productId: 214, ingredientId: 2, quantity: 2 },
        { productId: 214, ingredientId: 84, quantity: 3 },
        { productId: 214, ingredientId: 61, quantity: 1 },
        { productId: 215, ingredientId: 85, quantity: 2 },
        { productId: 215, ingredientId: 220, quantity: 1 },
        { productId: 215, ingredientId: 3, quantity: 2 },
        { productId: 216, ingredientId: 3, quantity: 1 },
        { productId: 216, ingredientId: 60, quantity: 1 },
        { productId: 216, ingredientId: 92, quantity: 3 },
        { productId: 217, ingredientId: 63, quantity: 1 },
        { productId: 217, ingredientId: 50, quantity: 2 },
        { productId: 217, ingredientId: 148, quantity: 2 },
        { productId: 217, ingredientId: 253, quantity: 1 },
        { productId: 218, ingredientId: 254, quantity: 1 },
        { productId: 218, ingredientId: 148, quantity: 1 },
        { productId: 218, ingredientId: 71, quantity: 2 },
        { productId: 219, ingredientId: 77, quantity: 9 },
        { productId: 219, ingredientId: 78, quantity: 1 },
        { productId: 220, ingredientId: 50, quantity: 4 },
        { productId: 220, ingredientId: 221, quantity: 1 },
        { productId: 221, ingredientId: 170, quantity: 3 },
        { productId: 222, ingredientId: 170, quantity: 3 },
        { productId: 222, ingredientId: 3, quantity: 2 },
        { productId: 222, ingredientId: 148, quantity: 1 },
        { productId: 222, ingredientId: 100, quantity: 1 },
        { productId: 223, ingredientId: 82, quantity: 2 },
        { productId: 223, ingredientId: 84, quantity: 2 },
        { productId: 223, ingredientId: 71, quantity: 2 },
        { productId: 224, ingredientId: 152, quantity: 1 },
        { productId: 224, ingredientId: 229, quantity: 3 },
        { productId: 225, ingredientId: 152, quantity: 2 },
        { productId: 226, ingredientId: 152, quantity: 2 },
        { productId: 226, ingredientId: 76, quantity: 1 },
        { productId: 226, ingredientId: 200, quantity: 1 },
        { productId: 227, ingredientId: 152, quantity: 2 },
        { productId: 227, ingredientId: 64, quantity: 3 },
        { productId: 228, ingredientId: 152, quantity: 3 },
        { productId: 228, ingredientId: 64, quantity: 5 },
        { productId: 228, ingredientId: 75, quantity: 1 },
        { productId: 229, ingredientId: 67, quantity: 1 },
        { productId: 230, ingredientId: 161, quantity: 3 },
        { productId: 231, ingredientId: 162, quantity: 3 },
        { productId: 232, ingredientId: 163, quantity: 3 },
        { productId: 233, ingredientId: 165, quantity: 3 },
        { productId: 234, ingredientId: 164, quantity: 3 },
        { productId: 235, ingredientId: 1, quantity: 1 },
        { productId: 235, ingredientId: 148, quantity: 1 },
        { productId: 235, ingredientId: 86, quantity: 5 },
        { productId: 236, ingredientId: 49, quantity: 1 },
        { productId: 236, ingredientId: 62, quantity: 1 },
        { productId: 236, ingredientId: 200, quantity: 2 },
        { productId: 236, ingredientId: 253, quantity: 1 },
        { productId: 237, ingredientId: 85, quantity: 3 },
        { productId: 237, ingredientId: 111, quantity: 1 },
        { productId: 237, ingredientId: 90, quantity: 3 },
        { productId: 238, ingredientId: 26, quantity: 3 },
        { productId: 238, ingredientId: 73, quantity: 3 },
        { productId: 238, ingredientId: 200, quantity: 3 },
        { productId: 239, ingredientId: 148, quantity: 1 },
        { productId: 239, ingredientId: 171, quantity: 2 },
        { productId: 239, ingredientId: 181, quantity: 2 },
        { productId: 240, ingredientId: 88, quantity: 3 },
        { productId: 240, ingredientId: 12, quantity: 1 },
        { productId: 240, ingredientId: 105, quantity: 2 },
        { productId: 241, ingredientId: 12, quantity: 2 },
        { productId: 241, ingredientId: 27, quantity: 3 },
        { productId: 241, ingredientId: 59, quantity: 1 },
        { productId: 242, ingredientId: 194, quantity: 3 },
        { productId: 242, ingredientId: 92, quantity: 1 },
        { productId: 242, ingredientId: 91, quantity: 1 },
        { productId: 242, ingredientId: 111, quantity: 1 },
        { productId: 243, ingredientId: 63, quantity: 1 },
        { productId: 243, ingredientId: 81, quantity: 2 },
        { productId: 243, ingredientId: 111, quantity: 1 },
        { productId: 243, ingredientId: 75, quantity: 3 },
        { productId: 244, ingredientId: 82, quantity: 2 },
        { productId: 244, ingredientId: 62, quantity: 1 },
        { productId: 244, ingredientId: 149, quantity: 2 },
        { productId: 244, ingredientId: 71, quantity: 1 },
        { productId: 245, ingredientId: 82, quantity: 1 },
        { productId: 245, ingredientId: 60, quantity: 1 },
        { productId: 245, ingredientId: 140, quantity: 1 },
        { productId: 245, ingredientId: 71, quantity: 2 },
        { productId: 246, ingredientId: 3, quantity: 2 },
        { productId: 246, ingredientId: 61, quantity: 1 },
        { productId: 246, ingredientId: 84, quantity: 3 },
        { productId: 247, ingredientId: 81, quantity: 2 },
        { productId: 247, ingredientId: 82, quantity: 1 },
        { productId: 247, ingredientId: 50, quantity: 2 },
        { productId: 247, ingredientId: 179, quantity: 3 },
        { productId: 248, ingredientId: 81, quantity: 1 },
        { productId: 248, ingredientId: 100, quantity: 2 },
        { productId: 248, ingredientId: 59, quantity: 1 },
        { productId: 248, ingredientId: 72, quantity: 3 },
        { productId: 249, ingredientId: 59, quantity: 1 },
        { productId: 249, ingredientId: 84, quantity: 2 },
        { productId: 249, ingredientId: 72, quantity: 3 },
        { productId: 250, ingredientId: 3, quantity: 1 },
        { productId: 250, ingredientId: 221, quantity: 1 },
        { productId: 250, ingredientId: 82, quantity: 1 },
        { productId: 250, ingredientId: 83, quantity: 2 },
        { productId: 251, ingredientId: 93, quantity: 3 },
        { productId: 251, ingredientId: 84, quantity: 1 },
        { productId: 251, ingredientId: 72, quantity: 3 },
        { productId: 252, ingredientId: 99, quantity: 3 },
        { productId: 252, ingredientId: 59, quantity: 1 },
        { productId: 252, ingredientId: 84, quantity: 2 },
        { productId: 253, ingredientId: 80, quantity: 2 },
        { productId: 254, ingredientId: 80, quantity: 1 },
        { productId: 255, ingredientId: 80, quantity: 4 },
        { productId: 256, ingredientId: 86, quantity: 5 },
        { productId: 256, ingredientId: 87, quantity: 20 },
        { productId: 256, ingredientId: 100, quantity: 1 },
        { productId: 256, ingredientId: 50, quantity: 3 },
        { productId: 257, ingredientId: 100, quantity: 1 },
        { productId: 257, ingredientId: 87, quantity: 15 },
        { productId: 257, ingredientId: 219, quantity: 1 },
        { productId: 258, ingredientId: 149, quantity: 1 },
        { productId: 258, ingredientId: 87, quantity: 15 },
        { productId: 258, ingredientId: 219, quantity: 1 },
        { productId: 259, ingredientId: 254, quantity: 1 },
        { productId: 259, ingredientId: 50, quantity: 4 },
        { productId: 259, ingredientId: 87, quantity: 15 },
        { productId: 259, ingredientId: 219, quantity: 1 },
        { productId: 260, ingredientId: 61, quantity: 1 },
        { productId: 260, ingredientId: 82, quantity: 2 },
        { productId: 260, ingredientId: 78, quantity: 4 },
        { productId: 261, ingredientId: 2, quantity: 1 },
        { productId: 261, ingredientId: 193, quantity: 1 },
        { productId: 261, ingredientId: 223, quantity: 1 },
        { productId: 262, ingredientId: 82, quantity: 2 },
        { productId: 262, ingredientId: 2, quantity: 2 },
        { productId: 262, ingredientId: 100, quantity: 1 },
        { productId: 262, ingredientId: 148, quantity: 1 },
        { productId: 263, ingredientId: 61, quantity: 1 },
        { productId: 263, ingredientId: 79, quantity: 4 },
        { productId: 263, ingredientId: 223, quantity: 1 },
        { productId: 264, ingredientId: 148, quantity: 1 },
        { productId: 264, ingredientId: 95, quantity: 3 },
        { productId: 265, ingredientId: 111, quantity: 1 },
        { productId: 265, ingredientId: 95, quantity: 3 },
        { productId: 266, ingredientId: 95, quantity: 5 },
        { productId: 267, ingredientId: 59, quantity: 1 },
        { productId: 267, ingredientId: 95, quantity: 3 },
        { productId: 268, ingredientId: 181, quantity: 1 },
        { productId: 268, ingredientId: 95, quantity: 3 },
        { productId: 269, ingredientId: 96, quantity: 1 },
        { productId: 269, ingredientId: 1, quantity: 2 },
        { productId: 269, ingredientId: 95, quantity: 1 },
        { productId: 270, ingredientId: 171, quantity: 1 },
        { productId: 270, ingredientId: 95, quantity: 3 },
        { productId: 271, ingredientId: 95, quantity: 3 },
        { productId: 271, ingredientId: 91, quantity: 1 },
        { productId: 271, ingredientId: 97, quantity: 1 },
      ]);
    });
};
