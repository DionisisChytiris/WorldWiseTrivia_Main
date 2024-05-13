import { useTranslation } from "react-i18next";

const { t } = useTranslation();
const TestData = [
    {
        // question: 'Hello',
        // options: 'world'
        question: t("change-theme"),
        options: t("capitals")
    }
]

export default TestData