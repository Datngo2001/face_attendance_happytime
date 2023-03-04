import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ActivedStatusContent, DisabledStatusContent } from "./components";
import { schema } from "./handleForm";
import "./styles.scss";
import InputFile from "components/InputFile";
import ButtonSwitchCustom from "components/ButtonSwitchCustom";
import ModalCustom from "components/ModalCustom";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";

const WorkspaceSettingsForm = () => {
  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  // ****************************

  // HOOK STATE
  const [activeStatus, setActiveStatus] = useState(true);
  // ****************************

  // HOOK EFFECT (CALL API)
  useEffect(() => { }, []);
  // ****************************

  // HOOK EFFECT (SET VALUE FOR FORM)
  useEffect(() => {
    setValue("workspaceName", "Coffee Store");
  }, []);
  // ****************************

  // ARROW FUNCTIONS
  const handleOnSubmit = (data) => {
    console.log("data", data);
    console.log("activeStatus", activeStatus);
  };
  const handleActStatus = () => {
    setActiveStatus(true);
  };
  const handleDisableStatus = () => {
    setActiveStatus(false);
  };
  // ****************************

  return (
    <>
      <div className="workspace-settings-form__wrapper">
        <h3 className="workspace-settings-form__title">workspace của bạn</h3>
        <div className="workspace-settings-form__body">
          <InputFile
            id="workspaceImg"
            name="workspaceImg"
            sizePreImg="120px"
            className="workspace-img"
            register={register}
            setValue={setValue}
            type={1}
          />
          <div className="field-control">
            <div className="label">
              <label htmlFor="activeStatus">Trạng thái hoạt động:</label>
            </div>
            <div className="switch-control">
              <ButtonSwitchCustom
                id="activeStatus"
                checked={activeStatus}
                setValue={setActiveStatus}
              />
              {activeStatus ? (
                <p className="status-des actived">Đang hoạt động</p>
              ) : (
                <p className="status-des disabled">Không hoạt động</p>
              )}

              <ModalCustom
                idTarget="activeStatus"
                titleHeader="Bạn có chắc?"
                btnJustifyContent="right"
                titleBtnAccept="Đồng ý"
                divider={true}
                callback={activeStatus ? handleDisableStatus : handleActStatus} state={false} setState={undefined}              >
                {activeStatus ? (
                  <DisabledStatusContent />
                ) : (
                  <ActivedStatusContent />
                )}
              </ModalCustom>
            </div>
          </div>
          <div className="field-control">
            <div className="label">
              <label htmlFor="workspaceName">
                Tên workspace<span> *</span>
              </label>
            </div>
            <InputCustom
              id="workspaceName"
              name="workspaceName"
              className="input-item"
              labelWidth="164px"
              width="272px"
              placeholder="Nhập tên workspace"
              register={register}
              message={errors}
            />
          </div>
        </div>
        <div className="workspace-settings-form__action">
          <ButtonCustom width="100px" onClick={handleSubmit(handleOnSubmit)}>
            cập nhật
          </ButtonCustom>
        </div>
      </div>
    </>
  );
};

export default WorkspaceSettingsForm;
