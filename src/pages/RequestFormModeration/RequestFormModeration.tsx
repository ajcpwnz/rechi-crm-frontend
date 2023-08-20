import * as React from "react";
import { styled } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

export const RequestFormModeration = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <FormContainer>
        <FormHeader>
          <FormLeftContent>
            <Link href="#">
              <KeyboardBackspaceIcon sx={{ color: "black" }} />
            </Link>

            <FormTextP>№5559</FormTextP>
          </FormLeftContent>

          <FormTextP>19.08</FormTextP>
        </FormHeader>

        <FormCards>
          <div>
            <h2>Ім’я</h2>
            <FormTextP>Анастасія</FormTextP>
          </div>

          <TextField fullWidth label="Анастасія" id="fullWidth" />
        </FormCards>

        <FormCards>
          <div>
            <h3>
              Ваш нік в Instagram чи посилання на вашу сторінку в Instagram
            </h3>
            <FormTextP>
              https://instagram.com/30nastena?igshid=MzNlNGNkZWQ4Mg==
            </FormTextP>
          </div>

          <TextField
            fullWidth
            label="...nastena?igshid=MzNlNGNkZWQ4Mg=="
            id="fullWidth"
          />
        </FormCards>

        <FormCards>
          <div>
            <h3>З якого населеного пункту ви були вимушені виїхати?</h3>
            <FormTextP>Херсонська область, смт Білозерка</FormTextP>
          </div>

          <TextField fullWidth label="Звідки?" id="fullWidth" />
        </FormCards>

        <FormCards>
          <div>
            <h3>Склад вашої сім’ї, кому потрібна допомога</h3>
            <FormTextP>
              Я, син 10 р., син 18 р., племінниця (перебуває в мене під опікою)
              18 р.
            </FormTextP>
          </div>
          <FormTextP>Марія</FormTextP>

          <TextField fullWidth label="Ім’я?" id="fullWidth" />

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <TextField fullWidth label="Вік" id="fullWidth" />
          </FormTwoField>

          <FormTextP>Сашко</FormTextP>

          <TextField fullWidth label="Ім’я?" id="fullWidth" />

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <TextField fullWidth label="Вік" id="fullWidth" />
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>Яку допомогу потребуєте?</h3>
            <FormTextP>
              Дитячий одяг, Дитяче взуття, Подушки/Ковдри/Пледи, Постільна
              білизна/Рушники, Засоби гігієни, Продуктовий набір
            </FormTextP>
          </div>

          <TextField fullWidth label="Предмети" id="fullWidth" />

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>
              Оберіть розмір необхідного жіночого одягу згідно розмірної таблиці
              нижче
            </h3>
            <FormTextP>Жіночі речі не потрібні</FormTextP>
          </div>

          <TextField fullWidth label="Штани" id="fullWidth" />

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>
              Оберіть розмір необхідного жіночого одягу згідно розмірної таблиці
              нижче
            </h3>
            <FormTextP>Штани</FormTextP>
          </div>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">M</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="M"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>M</MenuItem>
              <MenuItem value={2}>L</MenuItem>
              <MenuItem value={3}>XXL</MenuItem>
            </Select>
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>На який сезон потрібен жіночий одяг?</h3>
            <FormTextP>Літо</FormTextP>
          </div>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Літо
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Літо"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Літо</MenuItem>
              <MenuItem value={2}>Зима</MenuItem>
            </Select>
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>
              Оберіть розмір необхідного чоловічого одягу згідно розмірної
              таблиці нижче
            </h3>
            <FormTextP>Чоловічі речі не потрібні</FormTextP>
          </div>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Літо
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Літо"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Літо</MenuItem>
              <MenuItem value={2}>Зима</MenuItem>
            </Select>
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>Стать та вік, на який потрібен дитячий одяг</h3>
            <FormTextP>Дівчинка 2-3 р</FormTextP>
          </div>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <TextField fullWidth label="Рік" id="fullWidth" />
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>Напишіть дані по кожному члену сім'ї, кому потрібні речі</h3>
            <FormTextP>
              Марія 2.8 р. Зріст 98см, розмір 98-104, взуття 25-26
            </FormTextP>
          </div>
          <FormTextP>Штани</FormTextP>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Вік"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>
          </FormTwoField>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Вік"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>
          </FormTwoField>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Вік"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>
          </FormTwoField>

          <FormTextP>Сашко</FormTextP>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Вік"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>
          </FormTwoField>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Вік"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>
          </FormTwoField>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Вік"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-autowidth-label">
              Стать
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Стать"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Чоловіча</MenuItem>
              <MenuItem value={2}>Жіноча</MenuItem>
              <MenuItem value={3}>Гуманоід</MenuItem>
            </Select>
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>
              Якщо ми знайдемо додатковий одяг необхідного розміру, окрім
              вказаного вами в переліку, він не буде зайвим?
            </h3>
            <FormTextP>Не буде зайвим</FormTextP>
          </div>

          <FormTwoField>
            <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              fullWidth
              label="Ні"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={1}>Літо</MenuItem>
              <MenuItem value={2}>Зима</MenuItem>
            </Select>
          </FormTwoField>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>Якщо ви евакуювались разом зі своїми домашніми улюбленцями</h3>
            <FormTextP>
              Кішка Муня їсть корм як вологий так і сухий не перебирає
            </FormTextP>
          </div>

          <TextField fullWidth label="Кіт" id="fullWidth" />

          <TextField fullWidth label="Муня" id="fullWidth" />

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Стать"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Стерилізація"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Тип корму"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Наповнювач для лотка"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Наповнювач для лотка"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <TextField fullWidth label="Коментар" id="fullWidth" />

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h2>
              Можливо, у вас будуть додаткові уточнення, коментарі чи побажання?
            </h2>
            <FormTextP>Підгузки 5 розмір, якщо можна</FormTextP>
          </div>

          <TextField fullWidth label="Коментар" id="fullWidth" />

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h3>Дані для для доставки Новою Поштою</h3>
            <FormTextP>
              Місто Дніпро, Дніпропетровська область , відділення НП #89,
              Шершень Катерина Андріївна, 0956202174
            </FormTextP>
          </div>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Тип корму"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Наповнювач для лотка"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-autowidth-label">Ні</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            fullWidth
            label="Наповнювач для лотка"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Літо</MenuItem>
            <MenuItem value={2}>Зима</MenuItem>
          </Select>

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h2>
              Чи є у вас Telegram? Вкажіть, будь ласка, номер телефону, на який
              зареєстрований Telegram, а також ваш нік.
            </h2>
            <FormTextP>380506136936</FormTextP>
          </div>

          <TextField fullWidth label="380506136936" id="fullWidth" />

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h2>
              Можливо, у вас будуть додаткові уточнення, коментарі чи побажання?
            </h2>
            <FormTextP>
              Звичайно розумію що зараз не на часі такі речі, але мій синочок
              дуже мріє про лего та велосипед. У нього вдома.
            </FormTextP>
          </div>

          <TextField fullWidth label="Побажання" id="fullWidth" />

          <Button variant="contained" sx={{ background: "#D8E2FF" }}>
            <AddIcon sx={{ color: "black" }} />
          </Button>
        </FormCards>

        <FormCards>
          <div>
            <h2>Дані для доставки Укрпоштою</h2>
            <FormTextP>
              54003 проспект Центральний 184, Саражина Анастасія Олександрівна,
              0666407331, місто Миколаїв
            </FormTextP>
          </div>

        </FormCards>

        <FormCards>
          <div>
            <h2>Дані для доставки Укрпоштою</h2>
            <FormTextP>
              54003 проспект Центральний 184, Саражина Анастасія Олександрівна,
              0666407331, місто Миколаїв
            </FormTextP>
          </div>

        
        </FormCards>

        <FormCards>
          <div>
            <h2>
              Якщо ви евакуювались разом зі своїми домашніми улюбленцями,
              просимо написати
            </h2>
            <FormTextP>
              54003 проспект Центральний 184, Саражина Анастасія Олександрівна,
              0666407331, місто Миколаїв
            </FormTextP>
          </div>

        </FormCards>

        <Button variant="contained" sx={{ background: "#005AC1" }}>
                Зберегти
        </Button>


      </FormContainer>
    </FormControl>
  );
};

const FormContainer = styled("div")({
  maxWidth: "393px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const FormHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const FormLeftContent = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
});

const FormTextP = styled("p")({
  margin: "0",
  display: "flex",
  alignItems: "center",
});

const FormCards = styled("div")({
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  border: "1px solid #C4C6D0",
  padding: "16px",
  gap: "16px",
});

const FormTwoField = styled("div")({
  display: "flex",
  gap: "16px",
  position: "relative",
});
