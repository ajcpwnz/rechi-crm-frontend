import { Chip } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import { useCallback, useEffect, useMemo, useState } from 'react'
import rechi from './rechi.json'
import cuid from 'cuid'

interface AddedItem {
  id: string
  category: string
  item: string
}

interface RechiInputProps {
  label: string;
  onChange: (items: AddedItem[]) => void;
}

export const RechiInput = ({label, onChange}: RechiInputProps) => {
  const { categorizedItems, categories } = useMemo(() => {
    const items = rechi.reduce<Record<string, string[]>>((obj, row) => {
      const category = row.category || 'Інше'
      obj[category] ??= []
      if (row.item && !obj[category].includes(row.item)) {
        obj[category].push(row.item)
      }

      return obj
    }, {})

    return { categorizedItems: items, categories: Object.keys(items) }

  }, [rechi])


  const [category, setCategory] = useState('')
  const [item, setItem] = useState('')
  const [items, setItems] = useState<string[]>([])

  const [addedItems, setAddedItems] = useState<AddedItem[]>([])

  useEffect(() => {
    onChange(addedItems)
  }, [addedItems, onChange])

  const onCategoryChange = useCallback((event: SelectChangeEvent) => {
    setCategory(event.target.value)
    setItem('')

    setItems(categorizedItems[event.target.value])
  }, [categorizedItems])

  const onItemAdded = useCallback(() => {
    setAddedItems(oldItems => [...oldItems, { category, item, id: cuid() }]);
    setCategory('')
    setItem('')
    setItems([])

  }, [category, item])

  const onItemDeleted = useCallback((id: string) => {
    setAddedItems(oldItems => oldItems.filter(row => row.id !== id))
  }, [])

  return <Box>
    <Box>
      <Typography component="p" variant="subtitle1">
        {label}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
      <FormControl variant="standard" sx={{ mr: 1, minWidth: 240 }}>
        <InputLabel id="demo-simple-select-standard-label">Категорія</InputLabel>

        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={category}
          label="Категорія"
          onChange={onCategoryChange}
        >
          {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mr: 1, minWidth: 240 }}>
        <InputLabel id="demo-simple-select-standard-label">Назва</InputLabel>

        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={item}
          label="Назва"
          onChange={(e) => setItem(e.target.value)}
        >
          <MenuItem value={''}>Оберіть</MenuItem>
          {items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
      <Button type="button" disabled={item === ''} onClick={onItemAdded}>Додати</Button>
    </Box>
    <Box>
      {
        addedItems.map(item =>
          <Chip sx={{mr: 1, mb: 1, fontSize: '16px'}} label={item.item} key={item.id} variant="outlined" onDelete={() => onItemDeleted(item.id)}/>)
      }
    </Box>
  </Box>
}
