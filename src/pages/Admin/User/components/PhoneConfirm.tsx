import { LockOutlined } from "@ant-design/icons";
import { ModalForm, ProFormCaptcha, ProFormItem, ProFormText } from "@ant-design/pro-components";
import { message } from "antd";

export type PhoneConfirmProps = {
    open: boolean;
    onOpenChange: (visible: boolean) => void;
    data: cruisetime.UserDto;
    onSubmit: (values: cruisetime.ValidPhoneNumberInput) => Promise<void>;
}

const PhoneConfirm: React.FC<PhoneConfirmProps> = (props) => {
    return (
        <ModalForm
            title="手机号码验证"
            width={400}
            open={props.open}
            onOpenChange={props.onOpenChange}
            onFinish={async (values) => {
                props.onSubmit(values);
            }}
            modalProps={{ destroyOnClose: true }}
        >
            <ProFormText
                label="用户Id"
                name={"userId"}
                initialValue={props.data.id}
                hidden={true}
            >
            </ProFormText>
            <ProFormItem
                label=""
                name={"phoneNumber"}
                initialValue={props.data?.phoneNumber}
            >
                {`即将向手机：${props.data?.phoneNumber} 发送验证码短信`}
            </ProFormItem>
            <ProFormCaptcha
                fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined />,
                }}
                captchaProps={{
                    size: 'large',
                }}
                placeholder="请输入验证码1234"
                captchaTextRender={(timing, count) => {
                    if (timing) {
                        return `${count} 获取验证码`;
                    }
                    return "获取验证码";
                }}
                name="validCode"
                rules={[
                    {
                        required: true,
                        message: "请输入验证码！",
                    },
                ]}
                onGetCaptcha={async (phone) => {
                    message.success(`手机号 ${phone} 验证码发送成功!`);
                }}
            />
        </ModalForm>
    )
}

export default PhoneConfirm;