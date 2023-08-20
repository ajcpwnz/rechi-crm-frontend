import Box from '@mui/material/Box'

export const Definition = ({ label, description, hideEmpty }: {
  label: string,
  description?: string[],
  hideEmpty?: boolean
}) => {
  const empty = !description || !description.length || (description.length === 1 && !description[0])

  if (empty && hideEmpty) {
    return null
  }

  const renderDescriptionText = () => {
    if (empty) return '-'

    if (description.length === 1) {
      return description![0]
    } else {
      return <>{description!.map((row, idx) => <p key={idx}>{row}</p>)}</>
    }
  }

  return <Box>
    <p><b>{label}</b></p>
    <p>{renderDescriptionText()}</p>
  </Box>
}
