import { Button, DatePicker, DatePickerProps, Form, Input, Row } from 'antd';
import UploadImage from './UploadImage';

const CreateHousesForm = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Form
      className="w-[40%]"
      name="addHouses"
      scrollToFirstError
      layout="vertical"
    >
      <Form.Item
        name="streetName"
        label="Street name :"
        rules={[
          {
            required: true,
            message: 'Enter street Name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row className="flex justify-between">
        <Form.Item
          name="houseNumber"
          label="House number :"
          rules={[
            {
              required: true,
              message: 'Enter house Number',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="addition" label="Addition :">
          <Input />
        </Form.Item>
      </Row>
      <Form.Item
        name="postalCode"
        label="Postal Code : "
        rules={[
          {
            required: true,
            message: 'Enter postal code',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
            message: 'Enter city Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload Picture : (PNG or JPG)"
        rules={[
          {
            required: true,
            message: 'Upload the image',
          },
        ]}
      >
        <UploadImage />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price :"
        rules={[
          {
            required: true,
            message: 'Enter price',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="size"
        label="Size :"
        rules={[
          {
            required: true,
            message: 'Enter size',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="garage"
        label="Garage :"
        rules={[
          {
            required: true,
            message: 'Select one option',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="bedrooms"
        label="Bedrooms"
        rules={[
          {
            required: true,
            message: 'Enter bedrooms Number',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="bathrooms"
        label="Bathrooms"
        rules={[
          {
            required: true,
            message: 'Enter Bathrooms Number',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="constructionDate"
        label="Construction date :"
        rules={[
          {
            required: true,
            message: 'Pick Construction date',
          },
        ]}
      >
        <DatePicker className="w-full" onChange={onChange} />
      </Form.Item>

      <Form.Item
        name="Description"
        label="Description :"
        rules={[
          {
            required: true,
            message: 'Enter Description ',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="PostButton" className="w-full flex justify-end">
        <Button
          className="w-[100%] bg-[#d35400] text-[#FFF] hover:!bg-[#d33500] hover:!border-none hover:!outline-none hover:!text-[#FFF]"
          htmlType="submit"
        >
          Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateHousesForm;
