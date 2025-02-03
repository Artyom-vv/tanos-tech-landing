import Modal from 'react-modal';
import React, {useContext, useState, useEffect} from 'react';
import {ModalContext} from '@/pages';
import {Button, Divider, IconButton, tet, TextInput} from '@virtuslab/tetrisly-react';
import {CustomTagProps, TagSelector} from '@/components/CustomTag';
import PhoneInput from '@/components/PhoneInput';
import useHeroLargeTypo from "@/hooks/useHeroLargeTypo";

export function RequestModal({isModal}: { isModal: boolean }) {
    const {closeModal} = useContext(ModalContext);
    const heroLargeTypo = useHeroLargeTypo();
    const [tags] = useState<CustomTagProps[]>([
        {
            label: 'Рекомендации',
            value: 'recommendation',
            onClick: () => {
            },
        },
        {
            label: 'Соц. сети',
            value: 'socials',
            onClick: () => {
            },
        },
        {
            label: 'СМИ',
            value: 'media',
            onClick: () => {
            },
        },
    ]);
    const [showContent, setShowContent] = useState(false);

    // Эффект для анимации появления контента
    useEffect(() => {
        setShowContent(isModal);
    }, [isModal]);

    return (
        <Modal
            style={{
                content: {
                    backgroundColor: '#FFFFFF',
                },
                overlay: {
                    zIndex: 999,
                    backgroundColor: '#0000004D',
                },
            }}
            isOpen={isModal}
            className={`mt-4 h-full relative transition-all duration-300 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        >
            <div
                className="container h-full overflow-y-auto py-14 grid xl:grid-cols-12 lg:grid-cols-8 sm:grid-cols-6 gap-x-4">
                <div
                    className="xl:col-start-4 xl:col-span-6 lg:col-start-2 lg:col-span-6 md:col-start-1 md:col-span-6 mx-auto w-full">
                    <tet.h2 text={heroLargeTypo}>Оставьте заявку</tet.h2>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-secondary"
                        className="mt-4"
                    >
                        Заполните форму, мы свяжемся с Вами
                    </tet.p>
                    <div className="my-6">
                        <Divider custom={{color: '$color-border-default'}}/>
                    </div>
                    <div className="mb-12">
                        <tet.h3 text="$typo-header-3xLarge" className="mb-6">
                            Контакты
                        </tet.h3>
                        <div className="flex flex-col gap-4">
                            <TextInput placeholder="Как к Вам обращаться?"/>
                            <PhoneInput/>
                        </div>
                    </div>
                    <div className="mb-12">
                        <tet.h3 text="$typo-header-3xLarge" className="mb-6">
                            Задача
                        </tet.h3>
                        <TextInput className="mb-2" placeholder="Опишите задачу"/>
                        <Button variant="bare" appearance="primary" beforeIcon="20-attachment">
                            Прикрепить файл
                        </Button>
                    </div>
                    <div className="mb-12">
                        <tet.h3 text="$typo-header-3xLarge" className="mb-6">
                            Откуда вы узнали о нас?
                        </tet.h3>
                        <TagSelector className="flex gap-3" tags={tags}/>
                    </div>

                    <div className="my-6">
                        <Divider custom={{color: '$color-border-default'}}/>
                    </div>

                    <Button
                        className="max-lg:min-w-full"
                        appearance="primary" size="large">
                        Оставить заявку
                    </Button>
                    <tet.p
                        text="$typo-body-large"
                        color="$color-content-tertiary"
                        className="mt-4"
                    >
                        Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и с политикой
                        конфиденциальности
                    </tet.p>
                </div>

                <IconButton
                    icon="20-close"
                    variant="ghost"
                    appearance="primary"
                    size="large"
                    backgroundColor="$color-background-neutral-subtle"
                    className="absolute right-6 top-6 !rounded-full !size-[64px]"
                    onClick={() => {
                        setShowContent(false);
                        setTimeout(closeModal, 250)
                    }}
                />
            </div>
        </Modal>
    );
}