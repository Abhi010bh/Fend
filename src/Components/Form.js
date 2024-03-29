import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function CreditCardForm(props) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add New Student Details
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Student Name</FormLabel>
          <Input endDecorator={null} />
        </FormControl>
        
        <FormControl>
          <FormLabel>USN</FormLabel>
          <Input endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: '1/-1' }}>
          <FormLabel>Fees</FormLabel>
          <Input placeholder="Fees" />
        </FormControl>
        <Checkbox label="Save Details" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary">
            Add
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}