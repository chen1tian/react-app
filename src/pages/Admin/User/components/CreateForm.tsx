import { ModalForm, ProFormSelect, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';

export type DataFormProps = {
    open: boolean;
    onOpenChange: (visible: boolean) => void;
    title: string;
    // 初始化数据，可以为null
    initialValues?: cruisetime.UpdateUserDto;
    onSubmit: (values: any) => Promise<void>;
};

const CreateUpdateForm: React.FC<DataFormProps> = (props) => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <ModalForm
            title={props.title}
            width={600}
            open={props.open}
            onOpenChange={props.onOpenChange}
            modalProps={{
                destroyOnClose: true,
            }}
            initialValues={props.initialValues}
            onFinish={async (values) => {
                // 提交
                props.onSubmit(values);
            }}
        >
            {/* <ProFormText
                name="phoneNumber"
                label="手机号"
                placeholder="请输入手机号"
                fieldProps={{
                    maxLength: 11
                }}
                rules={[
                    { required: true, message: "手机号码必须填写" },
                    { max: 11, message: '请输入手机号码最多11个字符' },
                    {
                        pattern: /^^1[3456789]\d{9}$/,
                        message: '请输入正确的手机号'
                    }]}
            >
            </ProFormText> */}

            <ProFormText
                name="userName"
                label="用户名"
                placeholder="请输入用户名"
                rules={[{ max: 100, message: '请输入用户名最多100个字符' }]}
            >
            </ProFormText>
            <ProFormText.Password
                name="password"
                label="密码"
                placeholder="请输入密码"
                rules={[{ required: true, message: "密码必须填写" }, { max: 100, message: '密码最多100个字符' }]}
            >

            </ProFormText.Password>
            <ProFormText
                name="name"
                label="姓名"
                placeholder="请输入姓名"
                rules={[{ required: true, message: '请输入姓名' }, { max: 100, message: '姓名最多100个字符' }]}
            />
            <ProFormText
                name="email"
                label="邮箱"
                placeholder="请输入邮箱"
                rules={[{ max: 100, message: '请输入邮箱最多100个字符' }]}
            >
            </ProFormText>
            <ProFormSwitch
                name="isSuperAdmin"
                label="是否管理员"
            >
            </ProFormSwitch>
            {contextHolder}
        </ModalForm>
    );
}

export default CreateUpdateForm;