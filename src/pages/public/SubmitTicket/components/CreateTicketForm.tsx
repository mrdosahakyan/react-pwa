import React, { FC, useMemo } from 'react';
import Form from 'components/Base/Form/Form';
import Button from 'components/Base/Button/Button';
import { FormItem } from 'components/Base/Form/FormItem';
import { Input, TextArea } from 'components/Base/Input';
import Select from 'components/Base/Select/Select';
import { Row, Col } from 'components/Base/Grid/Grid';
import { validationRules } from 'components/Base/Form/validationRules';
import { EPriority, TSubmitTicketUi } from 'data/types/ClinetPortal.type';
import { useSubmitTicketMutation } from 'redux/apiSlice/clientPortal.slices';
import { toast } from 'components/Base/Notification';
import { useForm } from 'antd/lib/form/Form';
import { TOptionType } from 'data/types/generalDataTypes';
import { FileUploader } from 'components/Base/FileUploader/FileUploader';

type TCreateTicketFormProps = {
  domain: string;
};

const CreateTicketForm: FC<TCreateTicketFormProps> = ({ domain }) => {
  const [submitTicket, { isLoading }] = useSubmitTicketMutation();
  const [form] = useForm();

  const priorityOptions: TOptionType[] = useMemo(() => {
    return Object.values(EPriority).map(priority => ({
      value: priority,
      label: priority,
    }));
  }, []);

  const onFinish = async (values: TSubmitTicketUi) => {
    try {
      const formData = new FormData();
      formData.append(
        'request',
        new Blob(
          [
            JSON.stringify({
              title: values.title,
              description: values.description,
              priority: values.priority,
              email: values.email,
              domain,
            }),
          ],
          { type: 'application/json' },
        ),
      );
      values.attachmentFiles.forEach(item => {
        formData.append('attachmentFiles', item.originFileObj as Blob);
      });

      await submitTicket(formData).unwrap();
      toast({
        description: 'Ticket has been submitted successfully',
        title: 'Submit ticket',
        type: 'success',
      });
      form.resetFields();
    } catch (error) {
      toast({
        description: (error as any)?.data.message,
        title: 'Submit ticket',
        type: 'error',
      });
    }
  };
  return (
    <Form
      initialValues={{ attachmentFiles: [] }}
      onFinish={onFinish}
      name="ticket"
      autoComplete="off"
      preserve={false}
      form={form}
    >
      <Row gutter={[24, 24]} className="mb-4">
        <Col xs={24} sm={24} md={8} lg={8} xxl={8}>
          <FormItem
            name="title"
            marginBottom="0"
            label="Ticket title"
            rules={[validationRules.required()]}
          >
            <Input placeholder="Type ticket title" />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xxl={8}>
          <FormItem
            name="email"
            marginBottom="0"
            label="Work email"
            rules={[validationRules.required(), validationRules.email()]}
          >
            <Input placeholder="Type work email" />
          </FormItem>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xxl={8}>
          <FormItem
            name="priority"
            marginBottom="0"
            label="Priority"
            rules={[validationRules.required()]}
            initialValue="Low"
          >
            <Select placeholder="Select" options={priorityOptions} />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={[24, 8]}>
        <Col xs={24}>
          <FormItem
            name="description"
            marginBottom="0"
            label="Description (optional)"
          >
            <TextArea
              rows={5}
              placeholder="Type here"
              className="customScroll"
            />
          </FormItem>
        </Col>
        <Col span={24} className="mb-6">
          <FormItem name="attachmentFiles" marginBottom="0">
            <FileUploader />
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit ticket
        </Button>
      </FormItem>
    </Form>
  );
};

export default CreateTicketForm;
