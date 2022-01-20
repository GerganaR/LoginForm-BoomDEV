import { Card, Form, Input, Button } from "./form";

function LoginForm() {
  return (
    <Card>
      <Form>
        Email
        <Input />
        Password
        <Input />
        <Button>Submit</Button>
      </Form>
    </Card>
  );
}

export default LoginForm;
