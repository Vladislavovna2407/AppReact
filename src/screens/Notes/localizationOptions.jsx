import {useLocalization} from '../../localization/useLocalization'
import './styles.css'

export const LocalizationOptions = () => {
  /* In this component we are handling changing locale values.
  As you can see we are showing all locale values and handling when user changes it */
  const {locale, setLocale} = useLocalization()

  const onChangeLocale = newLocale => {
    setLocale(newLocale.target.value)
  }

  return (
    <span className="box">
      <select value={locale} onChange={onChangeLocale}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </span>
  )
}
