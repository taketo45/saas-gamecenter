import * as React from "react";
import { Form, Select } from "radix-ui";
import styles from "./styles.module.css";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";

import { getQuizRegions, getQuizCategories, getQuizzes, getQuizOptions } from '@/lib/db/queries'; 

async function quizPage() {
  const regions = await getQuizRegions();
  const categories = await getQuizCategories();

  return (
    <div className={styles.Container}>
      <h1 className={styles.Header}>地域/カテゴリ選択画面</h1>
      <Form.Root className={styles.Form}>
      <Form.Field className={styles.Field} name="region">
        <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
          <Form.Label className={styles.Title}>地域:</Form.Label>
          {/* <div className={styles.Select}> */}
            <Select.Root>
              <Select.Trigger className={styles.Trigger} aria-label="region">
                <Select.Value placeholder="地域を選んでください…" />
                <Select.Icon className={styles.Icon}>
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className={styles.Content}>
                  <Select.ScrollUpButton className={styles.ScrollButton}>
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className={styles.Viewport}>
                    <Select.Group>
                      <Select.Label className={styles.Label}>---地域---</Select.Label>
                      {regions.map((region,index) => (
                            <Select.Item
                            className={styles.Item}
                            // {index===0 ? defaultselected : ""}
                            // ref={forwardedRef}
                            key={region.id}
                            value={region.id.toString()}

                          >
                            <Select.ItemText>{region.displayName}</Select.ItemText>
                            <Select.ItemIndicator className={styles.ItemIndicator}>
                              <CheckIcon />
                            </Select.ItemIndicator>
                          </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton className={styles.ScrollButton}>
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          {/* </div> */}
        </div>
      </Form.Field>
      <br />
      <Form.Field className={styles.Field} name="category">
        <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
          <Form.Label className={styles.Title}>カテゴリ:</Form.Label>
          <Select.Root>
            <Select.Trigger className={styles.Trigger} aria-label="category">
              <Select.Value placeholder="カテゴリを選んでください…" />
              <Select.Icon className={styles.Icon}>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={styles.Content}>
                <Select.ScrollUpButton className={styles.ScrollButton}>
                  <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className={styles.Viewport}>
                  <Select.Group>
                    <Select.Label className={styles.Label}>---カテゴリ---</Select.Label>
                    {categories.map((category) => (
                      <Select.Item
                        className={styles.Item}
                        // ref={forwardedRef}
                        key={category.id}
                        value={category.id.toString()}
                      >
                        <Select.ItemText>{category.displayName}</Select.ItemText>
                        <Select.ItemIndicator className={styles.ItemIndicator}>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className={styles.ScrollButton}>
                  <ChevronDownIcon />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      </Form.Field>
      <button type="submit" className={styles.Button} style={{ marginTop: 10 }}>
        クイズを開始
      </button>
      </Form.Root>
    </div>

  )

  const SelectItem = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <Select.Item
          className={classnames(styles.Item, className)}
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className={styles.ItemIndicator}>
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      );
    },
  );


}

export default quizPage;