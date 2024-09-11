import { ActionType, ModalForm, PageContainer, ProColumns, ProFormText, ProTable } from "@ant-design/pro-components";
import { postAppUser, putAppUserId, getAppUser, deleteAppUserId, postAppUserChangePassword, postAppUserValidPhoneNumber } from '@/services/cruise-time-api/User'
import { Button, Modal, Tag, message } from "antd";
import { ToListData, ToPagedParams } from "@/services/AbpApi/abpApi";
import { KeyOutlined, PlusOutlined, UnlockOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import CreateForm from "./components/CreateForm";
import UpdateForm from "./components/UpdateForm";
import { useRequest, useModel } from "@umijs/max";
import PhoneConfirm from "./components/PhoneConfirm";

const handelAdd = async (fields: cruisetime.CreateUserDto) => {
    const rs = await postAppUser({ ...fields });
    console.log(rs)
    const hide = message.loading('正在添加');
    hide();
    return true;
}

const handelUpdate = async (fields: cruisetime.UpdateUserDto) => {
    const params: cruisetime.putAppUserIdParams = { id: fields.id ?? "", ...fields }
    await putAppUserId(params, { ...fields });
    const hide = message.loading('正在更新');
    hide();
    return true;
}
const User: React.FC = () => {
    // 当前用户
    const { initialState } = useModel('@@initialState');

    const { confirm } = Modal;

    // 操作引用
    const actionRef = useRef<ActionType>();
    // 状态
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    const [updateModalOpen, handleUpdateOpen] = useState<boolean>(false);
    const [roleModalOpen, handleRoleOpen] = useState<boolean>(false);
    const [currentRow, setCurrentRow] = useState<cruisetime.UserDto>();
    const [selectedSchoolIds, setSelectedSchoolIds] = useState<string[]>([]);
    const [phoneConfirmOpen, setPhoneConfirmOpen] = useState<boolean>(false);
    const [pwdChangeOpen, setPwdChangeOpen] = useState<boolean>(false);

    const [modal, contextHolder] = Modal.useModal();
    const columns: ProColumns<cruisetime.UserDto>[] = [
        {
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: '手机号码',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
            width: 120,
            hideInTable: true,
            hideInSearch: true,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '管理权限',
            dataIndex: 'isSuperAdmin',
            key: 'isSuperAdmin',
            render: (_, entity) => {
                if (entity.isSuperAdmin) {
                    return <Tag color="green">是</Tag>
                } else {
                    return <Tag color="lightGray">否</Tag>
                }
            }
        },
        // {
        //     title: '手机验证',
        //     dataIndex: 'PhoneNumberConfirmed',
        //     key: "PhoneNumberConfirmed",
        //     hideInSearch: true,
        //     width: 80,
        //     render: (_, entity) => {
        //         return entity.phoneNumberConfirmed ? <Tag color="green">已验证</Tag> : <Tag color="red" style={{ cursor: "pointer" }}
        //             onClick={() => {
        //                 setCurrentRow(entity);
        //                 setPhoneConfirmOpen(true);
        //             }}>未验证</Tag>

        //     }
        // },
        {
            title: "操作",
            dataIndex: 'option',
            valueType: 'option',
            width: 120,
            render: (_, entity) => [
                // 编辑按钮
                <Button key="edit" type="link"
                    onClick={
                        () => {                            
                            setCurrentRow(entity);
                            handleUpdateOpen(true);
                        }
                    }>
                    编辑</Button>,
                // 修改密码
                <Button key="chPwd" type="link" icon={<KeyOutlined />}
                    onClick={() => {
                        setCurrentRow(entity);
                        setPwdChangeOpen(true);
                    }}
                >
                    密码
                </Button>,
                // 删除按钮
                <Button key="del" type="link" danger
                    // hidden={entity?.userName === "admin"}
                    onClick={() => {
                        modal.confirm({
                            title: '删除确认',
                            content: `确认删除【${entity.name}】吗？`,
                            onOk: async () => {
                                const params: cruisetime.deleteAppUserIdParams = { id: entity.id ?? '' };
                                await deleteAppUserId(params);
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                        });
                    }}>
                    删除
                </Button>
            ]
        }
    ]

    return (
        <PageContainer
            title="用户管理"
        >
            <ProTable<cruisetime.UserDto, API.AbpParams>
                columns={columns}
                request={
                    async (options) => {
                        const params: cruisetime.getAppUserParams = { ...ToPagedParams(options) }
                        return ToListData(await getAppUser(params));
                    }}
                rowKey="id"
                actionRef={actionRef}
                search={{
                    span: 4,
                    labelWidth: 'auto',
                }}
                toolBarRender={() => [
                    <Button
                        type="primary"
                        key="primary"
                        onClick={() => {
                            handleModalOpen(true);
                        }}
                    ><PlusOutlined /> 新建
                    </Button>
                ]}
                pagination={{ showSizeChanger: true }}
            >
            </ProTable>
            {/* 新增 */}
            <CreateForm
                title="新建用户"
                open={createModalOpen}
                onOpenChange={handleModalOpen}
                onSubmit={async (value) => {
                    const success = await handelAdd(value as cruisetime.CreateUserDto);
                    if (success) {
                        handleModalOpen(false);
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }}
            >
            </CreateForm>
            {/* 编辑 */}
            <UpdateForm
                title="编辑用户"
                open={updateModalOpen}
                onOpenChange={handleUpdateOpen}
                initialValues={currentRow}
                onSubmit={async (value) => {
                    const success = await handelUpdate(value as cruisetime.UpdateUserDto);
                    if (success) {
                        handleUpdateOpen(false);

                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                }}
            >
            </UpdateForm>

            {/* 手机号码验证 */}
            <PhoneConfirm
                open={phoneConfirmOpen}
                onOpenChange={setPhoneConfirmOpen}
                data={currentRow || { phoneNumber: "未设置" }}
                onSubmit={async (value) => {
                    const success = await postAppUserValidPhoneNumber(value as cruisetime.ValidPhoneNumberInput);
                    if (success.data) {
                        setPhoneConfirmOpen(false);
                        if (actionRef.current) {
                            actionRef.current.reload();
                        }
                    }
                    else {
                        message.error("验证码不正确，请重试");
                    }
                }}
            >
            </PhoneConfirm>

            {/* 修改密码 */}
            <ModalForm
                width={400}
                open={pwdChangeOpen}
                onOpenChange={setPwdChangeOpen}
                title={`修改【${currentRow?.name}】的密码`}
                initialValues={currentRow}
                onFinish={async (value) => {

                    confirm({
                        title: '修改确认',
                        content: `确认修改【${currentRow?.name}】的密码吗？`,
                        onCancel: () => {
                            return;
                        },
                        onOk: async () => {
                            const success = await postAppUserChangePassword(value as cruisetime.ChangePasswordInput);
                            if (success.data) {
                                message.success("密码修改成功");
                                setPwdChangeOpen(false);
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                            else {
                                message.error("密码修改失败，请重试");
                            }

                            return true;
                        }
                    })
                }}
            >
                <ProFormText
                    label="userId"
                    name="id"
                    hidden={true}
                >
                </ProFormText>
                <ProFormText.Password
                    label="新密码"
                    name="Password"
                    rules={[{ required: true, message: '请输入新密码' }]}
                >
                </ProFormText.Password>
            </ModalForm>

            {contextHolder}
        </PageContainer>);
}

export default User;