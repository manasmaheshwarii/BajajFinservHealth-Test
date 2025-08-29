const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function isSpecialChar(str) {
  return /^[^a-zA-Z0-9\s]+$/.test(str);
}

function createAlternatingCaps(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (result.length % 2 === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input. 'data' must be an array.",
      });
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;
    let allAlphabets = "";

    data.forEach((item) => {
      const str = String(item);

      if (isNumber(str)) {
        const num = parseInt(str);
        if (num % 2 === 0) {
          evenNumbers.push(str);
        } else {
          oddNumbers.push(str);
        }
        sum += num;
      } else if (isAlphabet(str)) {
        alphabets.push(str.toUpperCase());
        allAlphabets += str;
      } else if (isSpecialChar(str)) {
        specialCharacters.push(str);
      }
    });

    const concatString = createAlternatingCaps(allAlphabets);

    const response = {
      is_success: true,
      user_id: "manas_maheshwari_23062004",
      email: "manasmaheshwaricode@gmail.com",
      roll_number: "22BCE10492",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: String(sum),
      concat_string: concatString,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      is_success: false,
      error: "Internal server error",
    });
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "BFHL API is running",
    endpoint: "/bfhl",
    method: "POST",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});
