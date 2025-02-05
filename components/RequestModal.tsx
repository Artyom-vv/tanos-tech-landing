import Modal from 'react-modal';
import React, {useContext, useState, useEffect, useRef} from 'react';
import {ModalContext} from '@/pages';
import {Button, CornerDialog, Divider, FileItem, IconButton, tet, TextInput} from '@virtuslab/tetrisly-react';
import {CustomTagProps, TagSelector} from '@/components/CustomTag';
import PhoneInput from '@/components/PhoneInput';
import useHeroLargeTypo from "@/hooks/useHeroLargeTypo";
import {useTypoBodyLarge} from "@/hooks/useTypoBodyLarge";
import {useHeaderTypo3xLarge} from "@/hooks/useHeaderTypo3xLarge";
import {useBreakpoint} from "@/hooks/useBreakpoint";

export function RequestModal({isModal}: { isModal: boolean }) {
    const {closeModal} = useContext(ModalContext);
    const breakpoint = useBreakpoint();
    const heroLargeTypo = useHeroLargeTypo();
    const headerTypo3xLarge = useHeaderTypo3xLarge();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [task, setTask] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>('recommendation');
    const [file, setFile] = useState<File | null>(null);
    const [isDialogVisible, setDialogVisible] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const [tags] = useState<CustomTagProps[]>([
        {label: 'Рекомендации', value: 'recommendation'},
        {label: 'Соц. сети', value: 'socials'},
        {label: 'СМИ', value: 'media'},
    ]);

    const [showContent, setShowContent] = useState(false);
    const typoBodyLarge = useTypoBodyLarge()

    // Эффект для анимации появления контента
    useEffect(() => {
        setShowContent(isModal);
    }, [isModal]);

    const handleDynamicFileUpload = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "*/*"; // Можно указать "image/*", "application/pdf" и т. д.
        input.style.display = "none";

        input.addEventListener("change", (event) => {
            const target = event.target as HTMLInputElement;
            if (!target.files?.length) return;

            const selectedFile = target.files[0];
            setFile(selectedFile); // Записываем файл в стейт

            // Удаляем input после загрузки
            document.body.removeChild(input);
        });

        // Добавляем input в DOM и вызываем клик
        document.body.appendChild(input);
        input.click();
    };

    async function sendRequest() {
        const api = "https://api.feedbacklab.online/api/v2/tanos_leads_request";
        const formData = new FormData();

        formData.append("callback_name", name);
        formData.append("callback_number", phone);
        formData.append("callback_email", email);
        formData.append("callback_task", task);
        formData.append("callback_channel", selectedTag || '');

        if (file) {
            formData.append("upload_file", file);
        }

        try {
            setIsLoading(true)

            const response = await fetch(api, {
                method: "POST",
                body: formData,
            }).finally(() => setIsLoading(false));

            if (response.ok) {
                const result = await response.json();
                console.log("Ответ от сервера:", result);
                console.log("Заявка отправлена!");

                // Сброс формы
                setName('');
                setEmail('');
                setPhone('');
                setTask('');
                setSelectedTag('');
                setFile(null);

                // Показываем диалог
                setDialogVisible(true);
                closeModal();
            } else {
                console.error("Ошибка при отправке формы:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Ошибка сети:", error);
        }
    }

    function getButtonState() {
        if (isLoading) return "loading";
        if (!name || !email || !phone || !task || !selectedTag) return "disabled";
    }

    return (
        <>
            <Modal
                style={{
                    content: {backgroundColor: '#FFFFFF'},
                    overlay: {zIndex: 999, backgroundColor: '#0000004D'},
                }}
                isOpen={isModal}
                className={`mt-4 h-full relative transition-all duration-300 ${
                    showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
            >
                <div className="container h-full overflow-y-auto py-14 grid xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-6 max-md:grid-cols-2 gap-x-4">
                    <div
                        className="xl:col-start-4 xl:col-span-6 lg:col-start-2 lg:col-span-6 md:col-start-1 md:col-span-6 max-md:col-span-2 mx-auto w-full">
                        <tet.h2 text={heroLargeTypo}>Оставьте заявку</tet.h2>
                        <tet.p text={typoBodyLarge} color="$color-content-secondary" className="mt-4">
                            Заполните форму, мы свяжемся с Вами
                        </tet.p>
                        <div className="md:my-6 max-md:my-4">
                            <Divider custom={{color: '$color-border-default'}}/>
                        </div>
                        <div className="md:mb-12 max-md:mb-6">
                            <tet.h3 text={headerTypo3xLarge} className="md:mb-6 max-md:mb-4">Контакты</tet.h3>
                            <div className="flex flex-col gap-4">
                                <TextInput placeholder="Как к Вам обращаться?" value={name} onChange={(e:any) => setName(e.target.value)}/>
                                <TextInput placeholder="Ваша почта" type="email" value={email} onChange={(e:any) => setEmail(e.target.value)}/>
                                <PhoneInput value={phone} onChange={setPhone}/>
                            </div>
                        </div>
                        <div className="md:mb-12 max-md:mb-6">
                            <tet.h3 text={headerTypo3xLarge} className="md:mb-6 max-md:mb-4">Задача</tet.h3>
                            <TextInput className="mb-2" placeholder="Опишите задачу" value={task}
                                       onChange={(e: any) => setTask(e.target.value)}/>
                            {file ? (
                                <FileItem onCloseClick={() => setFile(null)} state="replaceable" file={file} />
                            ) : (
                                <Button variant="bare" appearance="primary" beforeIcon="20-attachment"
                                        onClick={handleDynamicFileUpload}>
                                    Прикрепить файл
                                </Button>
                            )}
                        </div>
                        <div className="md:mb-12 max-md:mb-6">
                            <tet.h3 text={headerTypo3xLarge} className="md:mb-6 max-md:mb-4">Откуда вы узнали о нас?
                            </tet.h3>
                            <TagSelector
                                className="flex gap-3 flex-wrap"
                                tags={tags}
                                value={selectedTag}
                                onTagChange={setSelectedTag}
                            />
                        </div>
                        <div className="md:my-6 max-md:my-4">
                            <Divider custom={{color: '$color-border-default'}}/>
                        </div>
                        <Button className="max-lg:min-w-full" appearance="primary" size="large" state={getButtonState()} onClick={sendRequest}>
                            Оставить заявку
                        </Button>
                        <tet.p text={typoBodyLarge} color="$color-content-tertiary" className="mt-4">
                            Нажимая на кнопку, вы соглашаетесь <br className="md:hidden"/> на обработку персональных
                            данных<br className="md:hidden"/> и с политикой конфиденциальности
                        </tet.p>
                    </div>
                    {isDialogVisible && (
                        <div
                            className="z-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                        >
                            <CornerDialog
                                actions={[
                                    {
                                        label: 'ОК',
                                        onClick: () => setDialogVisible(false),
                                    }
                                ]}
                                custom={{
                                    minWidth: breakpoint === "sm" ? "300px" : "440px"
                                }}
                                content="Ваша заявка успешно отправлена!"
                                intent="none"
                                onCloseClick={() => setDialogVisible(false)}
                                title="Заявка отправлена"
                            />
                        </div>

                    )}
                    <IconButton
                        icon="20-close"
                        variant="ghost"
                        appearance="primary"
                        size="large"
                        backgroundColor="$color-background-neutral-subtle"
                        className="absolute right-6 top-6 !rounded-full !size-[44px] max-lg:!size-[44px] max-md:!size-[36px]"
                        onClick={() => {
                            setShowContent(false);
                            setTimeout(closeModal, 250);
                        }}
                    />
                </div>
            </Modal>
        </>
    );
}